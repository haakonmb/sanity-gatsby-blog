export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5d3fd5c900ae99e1eb4f05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e4tc41ou',
                  apiId: 'a24a896c-a758-4da1-8746-fd2aa9e70d13'
                },
                {
                  buildHookId: '5d5d3fd5f6b0778164b66e4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uskkqr7r',
                  apiId: '31059ef3-71e9-433c-9082-ed9467bc939b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haakonmb/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uskkqr7r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
