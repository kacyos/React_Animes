/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANIME_DB_KEY: string
  readonly VITE_ANIME_DB_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}