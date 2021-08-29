export default {
    name: 'descriptionPortableText',
    type: 'array',
    title: 'Description Portable Text',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                {
                    title: 'Normal',
                    value: 'normal'
                }
            ],
            lists: [],
            marks: {
                decorators: [
                    {
                        title: 'Strong', 
                        value: 'strong'
                    },
                    {
                        title: 'Emphasized', 
                        value: 'em'
                    }
                ] 
            },
            annotations: [
                {type: 'internalLink'},
                {type: 'externalLink'}
            ]
        }
    ]
}