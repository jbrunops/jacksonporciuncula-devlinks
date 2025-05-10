import { useState, useEffect } from 'react';
import { fetchMediumArticles, MediumArticle } from '@/lib/medium';

interface UseMediumArticlesProps {
  username: string;
  refreshInterval?: number; // Intervalo de atualização em ms (opcional)
}

export function useMediumArticles({ 
  username, 
  refreshInterval 
}: UseMediumArticlesProps) {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchMediumArticles(username);
      setArticles(data);
    } catch (err) {
      setError('Erro ao carregar artigos do Medium');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Carregar artigos na montagem do componente
    fetchArticles();

    // Configurar atualização periódica se refreshInterval for fornecido
    if (refreshInterval) {
      const intervalId = setInterval(fetchArticles, refreshInterval);
      
      // Limpar intervalo na desmontagem
      return () => clearInterval(intervalId);
    }
  }, [username, refreshInterval]);

  return {
    articles,
    isLoading,
    error,
    refetch: fetchArticles
  };
} 