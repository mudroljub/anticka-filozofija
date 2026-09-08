import { defaultLanguage } from '../types/data';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect(`/${defaultLanguage}`);
}
