interface ImportMetaEnv {
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly PUBLIC_GITHUB_URL: string;
    readonly PUBLIC_LINKEDIN_URL: string;
    readonly PUBLIC_EMAIL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}