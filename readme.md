# A bare-bones experiment with indiekit + eleventy

[Indiekit](https://getindiekit.com/) is a micropub server.
[Eleventy](https://www.11ty.dev/) is a static site generator; blogs, mostly.

I've repeatedly tried to add a micropub server to my existing blog,
and find myself stubbing my toe on this-or-that default setting.
"Oh, I store my files in a different directory structure" or "Oh,
I don't want to put media files in the same repo," or "This frontmatter doesn't match the custom format I came up with for myself..."

These might all be my fault (I mean, I'm *sure* of it) but still, it's frustrating.

So I thought I'd experiment with going the other way 'round. Install
a full-featured server, whip up a bare-bones blog repository,
and work "up" from there, accepting the server's defaults along the way. (Indiekit provides at least two different sets of presets, for both Hugo and Jekyll. I picked Jekyll at random.)

If the initial commits work, my plan is to have the "empty" eleventy blog become a Netlify-powered subdomain of my existing blog. I think it'll be `indiekit-eleventy.rich-text.net`.

I hope to put the indiekit-powered backend on Heroku. (Despite the headaches mentioned above, I *have* got an Indiekit-powered endpoint for my main blog running on my own server in lieu of Heroku, but I'd just as soon keep this experiment separated from that...)

I *think* this could be replicated by others, as all the server customizations can be passed in as environment variables, and the frontend tweaks are all in the HTML `<head>`. TODO: document these, if it turns out I'm right. :)
