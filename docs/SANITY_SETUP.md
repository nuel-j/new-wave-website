# New Wave CMS (Sanity)

The Sanity project is configured for:

- Project ID: `o9wcuk9w`
- Dataset: `production`
- Studio config: `sanity.config.ts`
- Content schemas: `schemaTypes/`

## Run the Studio locally

From the repository root:

```bash
npm install
npm run studio:dev
```

## Deploy the Studio to Sanity

After confirming the schema in the local Studio:

```bash
npm run studio:deploy
```

The Sanity CLI will prompt for a Studio hostname if one has not been selected. This publishes the content-management interface on Sanity hosting; it does not deploy or change the public New Wave website.

## Content types

- Homepage: hero content and featured artists, releases and events
- About page: long-form story, cover image and values
- Artists: profiles, portraits, biographies and social/music links
- Sound & music: singles, EPs, albums, artwork, track list and streaming links
- Events: poster, venue, dates, description and external ticket URL
- Shop products: images, description, price, currency and variants
- Editorial: articles, interviews, photography and culture features

## Important next steps

1. Confirm the Studio opens and the schema types appear.
2. Add the deployed public website origin to the Sanity project's API CORS origins with credentials enabled before using authenticated browser-side requests.
3. Connect the public React/Vite website to published Sanity documents and replace the local-only preview data in the temporary admin screen.
4. Protect any production content-management route with authentication.

No payment gateway, shipping provider, inventory checkout, or order processing is configured in this phase. Do not put API tokens or secrets in frontend code or commit them to Git.
