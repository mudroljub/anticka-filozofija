$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceRelative = 'data/sources/canonical-greekLit/data/tlg0562/tlg001/tlg0562.tlg001.perseus-grc2.xml'
$workDirectory = Join-Path $projectRoot 'data/works/marcus-aurelius/meditations'
[xml]$sourceDocument = Get-Content -Raw -Encoding UTF8 (Join-Path $projectRoot $sourceRelative)
$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add('# Grčki izvornik za rad — knjige V–VI')
$lines.Add('')
$lines.Add('Generisano alatom `tools/prepare-meditations-batches.ps1`; ne menjati ručno. Kanonski izvor je `' + $sourceRelative + '`. Prelom redova i razmaci su normalizovani; tekst se ne prevodi niti sažima. Oznake poglavlja odgovaraju sidrima prevodnih fajlova.')
$lines.Add('')
$batches = @(
    @{ Book = '5'; Roman = 'V'; Ranges = @(@(1,3), @(4,6), @(7,8), @(9,11), @(12,15), @(16,20), @(21,27), @(28,32), @(33,36)) },
    @{ Book = '6'; Roman = 'VI'; Ranges = @(@(1,10), @(11,14), @(15,17), @(18,25), @(26,30), @(31,38), @(39,44), @(45,50), @(51,59)) }
)
foreach ($book in $batches) {
    $chapters = @($sourceDocument.SelectNodes("//*[@subtype='book' and @n='$($book.Book)']/*[@subtype='chapter']"))
    if ($chapters.Count -eq 0) { throw "No chapters for book $($book.Book)" }
    $covered = [System.Collections.Generic.List[string]]::new()
    foreach ($range in $book.Ranges) {
        $label = "$($book.Roman).$($range[0])–$($book.Roman).$($range[1])"
        $lines.Add("## $label")
        $lines.Add('')
        $wordCount = 0
        foreach ($number in $range[0]..$range[1]) {
            $chapter = @($chapters | Where-Object { $_.GetAttribute('n') -eq [string]$number })
            if ($chapter.Count -ne 1) { throw "Missing or duplicate chapter $($book.Roman).$number" }
            $chapterText = [regex]::Replace($chapter[0].InnerText, '\s+', ' ').Trim()
            $wordCount += [regex]::Matches($chapterText, '\S+').Count
            $lines.Add("### $($book.Roman).$number")
            $lines.Add('')
            $lines.Add($chapterText)
            $lines.Add('')
            $covered.Add([string]$number)
        }
        Write-Output "$label : $wordCount words"
    }
    if ($covered.Count -ne $chapters.Count -or @($covered | Select-Object -Unique).Count -ne $chapters.Count) {
        throw "Incomplete or duplicate coverage for book $($book.Roman)"
    }
}
$utf8 = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText((Join-Path $workDirectory 'GRCKI_V_VI.md'), (($lines -join "`n") + "`n"), $utf8)
