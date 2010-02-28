# flipSource

Flip your page over to view the source

Only works in Webkit at the moment, half works in Firefox and Google Chrome, untested in Internet Explorer.

Author: Andrew Nesbitt (<http://teabass.com>)

Github: <http://github.com/andrew/flipSource>

## Usage

Include the required javascript files and the css file:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="flipSource.js" type="text/javascript"></script>
    <link href="flipSource.css" rel="stylesheet" type="text/css" />

Then once the page has loaded, just call `flipSource` on the body

    <script type="text/javascript" charset="utf-8">
     $(document).ready(function() {  
        $('body').flipSource();
       });
    </script>

## Note on Patches/Pull Requests

* Fork the project.
* Make your feature addition or bug fix.
* Send me a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2010 Andrew Nesbitt. See LICENSE for details.