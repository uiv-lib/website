# Collapse

> Flexible plugin for easy toggle behavior.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4714899946256166"
     data-ad-slot="4603582855"></ins>

## Example

Click the button below to show and hide another element.

<<< @/docs/.vuepress/components/collapse/example.vue

<collapse-example/>

## Accordion

Extend the default collapse behavior to create an accordion with the panel component.

<<< @/docs/.vuepress/components/collapse/accordion.vue

<collapse-accordion/>

# API Reference

## [Collapse](https://github.com/wxsms/uiv/blob/master/src/components/collapse/Collapse.vue)

### Props

Name                  | Type       | Default  | Required | Description
----------------      | ---------- | -------- | -------- | -----------------------
`v-model`             | Boolean    | false    | &#10004; | Show / hide the component.
`tag`                 | String     | div      |          | The HTML tag that render the collapse component.
`transition-duration` | Number     | 350      |          | Collapse transition speed. Use 0 to disable transition.

### Slots

Name      | Description
--------- | -----------------------
`default` | Replace as the collapse body.

### Events

Name        | Params | Description
----------- | ------ | ---------------
`show`      |        | This event fires immediately when the v-model prop is set to true.
`shown`     |        | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
`hide`      |        | 	This event is fired immediately when the v-model prop is set to false.
`hidden`    |        | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).
