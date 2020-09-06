export default {
  widgets: [
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
                  buildHookId: '5f5454dee700ee5e805ea00a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ej4uk89b',
                  apiId: 'b4cbda5f-bf32-4f31-9677-f66bd3c48b79'
                },
                {
                  buildHookId: '5f5454df9894665c07b6e6fb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hok3mmsi',
                  apiId: '8fe67ea3-c939-485c-9e6e-ba5eb03acaca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamalla/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hok3mmsi.netlify.app', category: 'apps'}
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
