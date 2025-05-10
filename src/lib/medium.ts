import axios from 'axios';

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

export interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumArticle[];
}

/**
 * Busca artigos do Medium de um usuário específico
 * @param username Nome de usuário do Medium
 * @returns Promise com a lista de artigos
 */
export async function fetchMediumArticles(username: string): Promise<MediumArticle[]> {
  try {
    // Usando a API RSS2JSON para converter o feed RSS do Medium para JSON
    const rssUrl = `https://medium.com/feed/@${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await axios.get<MediumResponse>(apiUrl);
    
    if (response.data.status !== 'ok') {
      throw new Error('Falha ao buscar artigos do Medium');
    }
    
    // Extrair miniaturas das descrições, se necessário
    const articles = response.data.items.map(article => {
      // Se não tiver thumbnail, tentar extrair da descrição
      if (!article.thumbnail || article.thumbnail === '') {
        const thumbnailMatch = article.description.match(/<img[^>]+src="([^">]+)"/);
        if (thumbnailMatch && thumbnailMatch[1]) {
          article.thumbnail = thumbnailMatch[1];
        }
      }
      
      return article;
    });
    
    return articles;
  } catch (error) {
    console.error('Erro ao buscar artigos do Medium:', error);
    return [];
  }
} 