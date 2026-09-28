import { useParams, Navigate } from 'react-router-dom';
import PromptPage from '@/components/PromptPage';
import { getPage } from '@/data/site';

export default function PromptPageRoute() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getPage(slug) : undefined;
  if (!page) return <Navigate to="/" replace />;
  return <PromptPage page={page} />;
}
