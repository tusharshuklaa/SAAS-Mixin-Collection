# SaSSEase - A Mixins Lab

![picture alt](https://raw.githubusercontent.com/tusharshuklaa/SaSSEase---A-Mixins-Lab/master/logo.png "SaSSEase - A Mixins Lab")

A hand-picked collection of useful SAAS Mixins for most of the usual styling tasks. The collection holds various mixins from multiple articles found online, some from stackoverflow and some written by me.

## [Codepen](https://codepen.io/) Examples
___

I have demonstrated all of the mixins in codepen (links in mixin name below). They all refer to full mode of Codepen. Feel free to fork it, make changes and play around. To go to the code view, click on 'Change View' button on top right corner and choose 'Editor View'. If you want to give a feedback on any of the pens, you can either go to 'Details View' or replace 'full' with 'details' in the Codepen URL and let me know in the comments section.

## List of Mixins
___

### Mixins related to dimensions of an Element

* [Box](https://codepen.io/tusharshukla/full/MqxaKZ/) - This is one of the most simplest yet handy mixin for that just creates a box by providing width and height as parameters. If height is not provided, width is taken as default for height and the box becomes a square.

    ***Usage:***

```SCSS
    @include box(100px);
    @include box(200px, 100px);
    @include box(calc(100% - 50px), 100px);
```

* [Width](https://codepen.io/tusharshukla/) - Now this may seem odd to have a mixin to set width of an element but it does offer more than what you think. There are some additional values to width property that requires vendor prefixing such as 'width: min-content;'

    ***Usage:***

```SCSS
    @include width(min-content);
    @include width(400px);
```

* [Position](https://codepen.io/tusharshukla/full/mzepjv/) - Define position of an element as fixed/absolute/relative/static with top, left, margin etc values in no specific order

```SCSS
    @include position("fixed" top 100px right 5px);
```

* [Fixed](https://codepen.io/tusharshukla/full/mzepjv/) - Uses position mixin and passes first argument as 'fixed' by default for quick use

  ```SCSS
  @include fixed(top 100px left 0 right 0);
  ```

  * [Absolute](https://codepen.io/tusharshukla/full/mzepjv/) - Uses position mixin and passes first argument as 'absolute' by default for quick use

  ```SCSS
  @include absolute(top 100px left 0 right 0);
  ```

  * [Relative](https://codepen.io/tusharshukla/full/mzepjv/) - Uses position mixin and passes first argument as 'relative' by default for quick use

  ```
  @include relative(margin-top 100px );
  ```

## Important
___

All of the mixins are tried and tested hence they should serve their exact purpose.
All the mixins are well documented so as to make them very easy to understand and use

Continuous additions/improvements of mixins are happening in this repository so keep a watch :)

## Authors
___

* [**Tushar Shukla**](https://github.com/tusharshuklaa)

## Contact Info
___

You can send me an email at [tusharshuklaa@gmail.com](mailto:tusharshuklaa@gmail.com?Subject=SAAS%20Mixin%20Collection:Issue). Please mention Repository name in subject line when sending the email.

## Contributing
___

I try to update this repository whenever I get time, which is often very less :(
In case you do not find a codepen link to any of the mixins and would like to contribute then feel free to do so.
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Disclaimer
___

All the mixins mentioned in this file are either written by me or taken from online sources such as stackoverflow, css-tricks and other articles found online. Some of them also have been taken from somewhere and then modified by me as per my needs. If someone happens to own some piece of it, let me know and I'll add the reference to it.
Also, not all of the mixins have been listed here in this readme file (it's just me being lazy for not updating the readme timely, sorry for that!).
But you may find proper commented mixins in the _mixins.scss file. That should do well!!

## Acknowledgments
___

* [**CSS-Tricks**](https://css-tricks.com/)
* [**Stackoverflow**](https://stackoverflow.com/)
* [**Developer Mozilla (Flexbox mixins)**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins)

## Github Repo URL
___

[**SaSSEase - A Mixins Lab**](https://github.com/tusharshuklaa/SaSSEase---A-Mixins-Lab)

