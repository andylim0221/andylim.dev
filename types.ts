export type UserArticlesType = {
    type_of: string;
    id: number;
    title: string;
    description: string;   
    cover_image: string;
    published: boolean;
    published_at: string;
    tag_list: string[];
    slug: string;
    path: string;
    url: string;
    canonical_url: string;
    positive_reactions_count: number;
    comments_count: number;
    public_reactions_count: number;
    page_views_count: number;
    published_timestamp: string;
    body_markdown: string;
    user: object;
    reading_time_minutes: number;
    organization: object;
    flare_tag: object;
}

export type ArticleType = {
    readable_publish_date: string;
    tags: string[];
    
} & UserArticlesType;