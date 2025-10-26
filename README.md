# Robin Gottschalk - Business Consultant Portfolio

A modern, SEO-optimized portfolio website for business consulting services, built with Next.js 14+ and Sanity CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Deployment**: Vercel
- **SEO**: next-seo, Metadata API

## 📋 Features

- ✅ Fully responsive design
- ✅ SEO optimized with metadata and sitemap
- ✅ Headless CMS for easy content management
- ✅ Fast page loads with static generation
- ✅ Professional UI with smooth animations
- ✅ Contact forms with validation
- ✅ Accessibility compliant

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (free tier)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd robin-gottschalk
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Then fill in your Sanity project details in `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
robin-gottschalk/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── sections/         # Page sections
├── lib/                   # Utility functions
│   ├── sanity.ts         # Sanity client
│   └── utils.ts          # Helper functions
├── sanity/               # Sanity CMS configuration
│   ├── schemas/          # Content schemas
│   └── config.ts         # Sanity config
├── types/                # TypeScript types
└── public/               # Static assets
```

## 🎨 Customization

### Brand Colors

Update brand colors in `app/globals.css`:
- Primary: Navy Blue (#1e3a8a)
- Secondary: Amber (#f59e0b)
- Accent: Emerald (#10b981)

### Content Management

Access Sanity Studio at `/studio` (after Phase 2 setup) to:
- Edit page content
- Manage programs
- Add testimonials
- Update site settings

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically redeploy when:
- You push changes to GitHub
- Content is updated in Sanity CMS

## 📝 Development Phases

- [x] **Phase 1**: Project Setup & Configuration
- [ ] **Phase 2**: Sanity CMS Setup
- [ ] **Phase 3**: SEO Configuration
- [ ] **Phase 4**: Component Development
- [ ] **Phase 5**: Page Development
- [ ] **Phase 6**: Forms & Interactions
- [ ] **Phase 7**: Optimization
- [ ] **Phase 8**: Deployment

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

Private project - All rights reserved

## 👤 Contact

For questions or support, contact [Your Email]
