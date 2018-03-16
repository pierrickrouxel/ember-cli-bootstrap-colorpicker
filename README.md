# ember-cli-bootstrap-colorpicker

Bootstrap colorpicker for Ember. This component is based on [mjolnic-bootstrap-colorpicker](https://github.com/mjolnic/bootstrap-colorpicker/).

Installation
------------------------------------------------------------------------------

* `ember install ember-cli-bootstrap-colorpicker`

## BREAKING CHANGE for version 3

Two-way bindings are replaced by data down, actions up (DDAU).
See: http://emberjs.com/blog/2015/06/12/ember-1-13-0-released.html#toc_ember-2-0-beta

Before:
```handlebars
{{bs-colorpicker tagName="input" type="text" color=color format="hex"}}
```

After:
```handlebars
{{bs-colorpicker tagName="input" type="text" color=color format="hex" onChange=(action (mut color))}}
```

## Usage

With an input:

```handlebars
{{bs-colorpicker tagName="input" type="text" color=color format="hex" onChange=(action (mut color))}}
```

With an input addon:

```handlebars
{{#bs-colorpicker color=color format="hex" classNames="input-group" onChange=(action (mut color))}}
  <input type="text" class="form-control">
  <span class="input-group-addon"><i></i></span>
{{/bs-colorpicker}}
```

You can use this component with what you want. It simply initializes the colorpicker on the element.

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
