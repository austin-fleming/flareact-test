import Render from "./renderers/InternalLink"

export default {
    name: 'internalLink',
    title: 'Internal Link',
    type: 'reference',
    description: 'Select an internal document to link.',
    to: [
        {type: 'article'},
        {type: 'author'}
    ],
    blockEditor: {
        icon: () => '🔗',
        import: Render
    }
}