# Tailwind CSS Tables Plugin

This plugin generates bootstrap styled tables in Tailwind CSS. Anything in the [bootstrap tables documentation](https://getbootstrap.com/docs/4.0/content/tables) should work.

## Installation

```bash
# With NPM
npm install tailwindcss-tables --save

# With Yarn
yarn add tailwindcss-tables

# Manually
# Create a /plugins/tailwindcss-tables folder in your project and drop 'index.js' inside of it.
```

## Usage

To use the plugin, simply require it in your Tailwind config file.

```js
plugins: [
  // Other plugins...
  require('tailwindcss-tables')(),

  // If pulled in manually...
  require('./plugins/tailwindcss-tables')(),
],
```

You can now use any of [bootstrap's table classes](https://getbootstrap.com/docs/4.0/content/tables) in your project.

## Examples

#### Basic example from bootstrap docs:

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

![bootstrap-table](https://user-images.githubusercontent.com/4316355/38008280-d40e1ee0-321b-11e8-8e9f-24d18df4ea25.png)

#### Using Tailwind's utilities

You are free to use Tailwind's utilities to customize the table. Works with Tailwind v1.0 or pre Tailwind v1.0. Just adjust your class names.

```html
<table class="table">
  <thead class="bg-blue-500 text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td class="bg-red-500 text-white">Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

![bootstrap-table-custom](https://user-images.githubusercontent.com/4316355/38009083-4f594ff8-3220-11e8-8eaa-9634dd0eaa73.png)

#### Customization

I've exposed a few options that are a bit cumbersome to change using utilities.

```js
plugins: [
  // Other plugins...
  require('tailwindcss-tables')({
    cellPadding: '.75rem',  // default: .75rem
    tableBorderColor: '#dee2e6',  // default: #dee2e6
    tableStripedBackgroundColor: 'rgba(0,0,0,.05)',  // default: rgba(0,0,0,.05)
    tableHoverBackgroundColor: 'rgba(0,0,0,.075)',  // default: rgba(0,0,0,.075)
    tableBodyBorder: true, // default: true. If set to false, borders for the table body will be removed. Only works for normal tables (i.e. does not apply to .table-bordered)
    verticalAlign: 'top', // default: 'top'
  }),
],
```

Again, have a look at [bootstrap's tables documentation](https://getbootstrap.com/docs/4.0/content/tables) for other options. For example, wrap your table in a `div.table-responsive` class and your table should be responsive.

#### Enjoy!



