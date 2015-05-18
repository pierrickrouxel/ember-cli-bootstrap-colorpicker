# ember-cli-bootstrap-colorpicker

Bootstrap colorpicker for Ember. This component is based on [mjolnic-bootstrap-colorpicker](https://github.com/mjolnic/bootstrap-colorpicker/).

## Installation

* `ember install ember-cli-bootstrap-colorpicker`

## Usage

With an input:

```handlebars
<input type="text" {{bs-colorpicker color=color format='hex'}}>
```

With an input addon:

```handlebars
<div class="input-group" {{bs-colorpicker color=color format='hex'}}>
  <input type="text" class="form-control">
  <span class="input-group-addon"><i></i></span>
</div>
```

You can use this helper with what you want. It simply initializes the colorpicker on the tag.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
