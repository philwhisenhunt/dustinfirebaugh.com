---
path: '/Web_Assembly'
date: '2020-02-17'
title: 'Web Assembly with Go!'
tags: ['GO', 'Web Assembly']
excerpt: 'A quick look at Web Assembly'
---

![magic](https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif)

... Straight to a Go Web Assembly example? [game of life in go wasm](https://github.com/dfirebaugh/game-of-life-wasm)

This stuff is exciting!

#### Will it Replace Javascript?

No. Web Assembly is intended to run along side of Javascript. Allowing you to use Javascript for it's strengths (expressiveness, ease of use, manipulating DOM nodes) while gaining efficiencies of near native speeds and strong typing of other language (e.g. C, C++, Rust, etc...)

### What is Web Assembly?

> WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications
> -- [Web Assembly Home Page](https://webassembly.org/)

The super high level description is that Web Assembly allows us to write code for the web with languages other than Javascript.

There's a bit more to it than that.

[Javascript Engines](https://en.wikipedia.org/wiki/JavaScript_engine)(most notably [V8](https://v8.dev/) on Chrome and [Spider Monkey](https://en.wikipedia.org/wiki/SpiderMonkey) on Firefox ) run on top of a virtual machine in the browser (check out the [history lesson](#Some-Context-and-a-brief-history-lesson) a bit further down). Web Assembly runs on top of this same virtual machine.

The name Web Assembly is a bit of a mislabel because It's not quite [Web](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/) and it's not quite [Assembly](https://stackoverflow.com/questions/1782415/what-is-the-difference-between-assembly-code-and-bytecode) (it's a bytecode intended to run on a VM -- assembly usually refers to opcodes compiled to something natively executable by machines). Yes, you can compile to target browsers, but there's actually a lot of potential for web assembly running outside the browser. (see further in this writing [Web Assembly Outside of the Web - WASI](#Web-Assembly-Outside-of-the-Web---WASI))

### Why do you need to be aware of Web Assembly Today?

Web Assembly (or wasm for short) has paradigm shifting potential that will affect how the web works and how we write software. Even if you're not actively writing code for Web Assembly, frameworks will be taking advantage of web assembly to optimize for performance.

WASM is being created as an open standard by [W3C WebAssembly Community](https://www.w3.org/community/webassembly/).

WASM was first announced in 2015, and gained first class [support from all major browsers in 2017](https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/). Web Assembly is out today and it's likely that some software (and WebApps) that you use are currently taking advantage of it.

See further [use-cases](https://webassembly.org/docs/use-cases/)

#### Efficient and Fast

> WebAssembly code can be executed at near-native speed across different platforms by taking advantage of common [hardware capabilities](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
> -- [Mozilla Developer Wiki](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)

It's often said that Web Assembly is fast. "Fast" is in reference to how fast it is compared to Javascript. These days [Javascript is amazingly fast](#The-Speed-of-Javascript), but wasm aims to perform at near native speeds.

#### Safe

Web Assembly is built for safety. Being that it runs off of the same VM that javascript uses, it's sandboxed just as javascript is.

Web Assembly will allow the use of mature security and cryptographic libraries that previously limited availability for the web.

- [Native Exploits](https://i.blackhat.com/us-18/Thu-August-9/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web.pdf)
- [Security Chasms of WASM](https://i.blackhat.com/us-18/Thu-August-9/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf)

Also note that Web Assembly is disassemblable via tools provided by the Web Assembly team.
see [WABT](https://github.com/WebAssembly/wabt)

## Some Context and a brief history lesson

![90sweb_img](https://media.giphy.com/media/OeEVCJ2UqMQNO/giphy.gif)

![netscape_img](https://media.giphy.com/media/lORulWik72L7O/giphy.gif)

### The Speed of Javascript

These days, Javascript is blazing fast. However, this wasn't always the case. Javascript wasn't built to be fast.

With any language there are usually tradeoffs. Javascript has a lot of ease of use and expressiveness. This allows for developers to get up and going quickly with it and allows for rapid prototyping of web apps.

[Javascript was written in ten days.](https://brendaneich.com/2011/06/new-javascript-engine-module-owner/) Well, the first Javascript Engine Prototype took 10 days. It wasn't built for speed. Speed came later when browsers started implementing [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) (Just In Time Compilation) compilers in efforts to increase performance.

The first JIT compilers in major browsers were implemented in 2008. This allowed browsers to increase the speed of javascript code running on the web making js code almost 10 times faster.

Web Assembly runs on top of the same VMs that these JIT compilers run on and Web Assembly will make the web even faster.

A decent demonstration of Web Assembly's performance: [youtube video - WebAssembly – To the browser and beyond! | performance.now() 2019](https://youtu.be/Z6ZhIA8i_8g?t=1565)

## Programming Web Assembly With Rust

[Programming Web Assembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust) is an excellent book that walks through several projects to help you learn Web Assembly. It starts out by introducing WAT (Web Assembly Text Format) and then later dives into writing Web Assembly with the [Rust](https://www.rust-lang.org/) Programming language.

This is a great book if you like learning by doing and it happens to be a decent intro to Rust.

Alternatively, here is a open source free to read book [Rust and Web Assembly](https://rustwasm.github.io/book/) (Disclaimer - I have not read the "Rust and Web Assembly" book aside from skimming through a few chapters)

## WAT

[WAT](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) (Web Assembly Text Format) is what allows Web Assembly to be human readable. It's probably not recommended to write an entire app this way. However, it's good to know for the purposes of learning how Web Assembly works behind the scenes and can be a useful tool for debugging.

## Rust

Rust has been voted [Stack Overflow’s most loved language for four years in a row](https://insights.stackoverflow.com/survey/2019)

At the moment, Rust is probably the best language for writing code for Web Assembly. Mostly that there's a lot of tooling and support. The Rust team is driving a lot of progress in the Web Assembly arena.

Again, most languages have trade offs. For Rust, it seems to be the difficult learning curve.

Rust seems to be the systems and embedded level programming language of the future.

## Why Go?

I chose to do some experimenting with Web Assembly with Go for a few reasons.

1. It's great for enterprise software
2. I know it fairly well.
3. Simple idiomatic opinionated syntax
4. Interesting concurrency patterns
5. Closures (not that other languages don't have closures)

Perhaps more importantly, we use it a lot at work and I was interested in evaluating how viable Go would be for writing Web Assembly modules.

### Problems with Go

Go is intended for writing software (usually) on servers. One of Go's tradeoffs is that they didn't care a lot about how big the binaries compile to. Therefore, Go binaries are bigger (in comparison to Rust or C). This is because Go runtime is fairly large. Which is nice sometimes, because there are many built-ins in the standard libraries.

### TinyGo

[TinyGo](https://tinygo.org/) is a compiler for Go intended for use on microcontrollers. TinyGo now also supports compiling to Web Assembly. It's based on [LLVM](https://llvm.org/)

Oh TinyGo, I had some hopes for you, but ultimately the most recent standard Go compiler had better support for Web Assembly out of the box.

However, the binaries were a lot smaller. The TinyGo binaries were only a few kilabytes. Whereas the Go binaries were around 3 to 4 megabytes. (note: 3 to 4 megabytes is fairly large to be shipping over http)

### Concurrency?

With the [breakdown of Moore's law](https://interestingengineering.com/no-more-transistors-the-end-of-moores-law), concurrency will become increasingly important. Transistors won't be getting exponentially smaller, but it's possible that we lean more on parallelism and concurrency models to increase performance in applications.

Some may say that Go's concurrency model is the entire point of Go. Go handles this with the interesting concepts (e.g. [goroutines](https://golangbot.com/goroutines/)(which are "kind of" lightweight threads) and [channels](https://blog.golang.org/pipelines) which are "kind of" similar to [named pipes](https://opensource.com/article/18/8/introduction-pipes-linux) or LIFOs in linux)

So, can you do concurrency with Go in web assembly?

Yes, you can!

## Web Assembly, the Future and Beyond

Web Assembly is an Intermediate Representation. It isn't targeting a specific machine. It's targeting virtual machines which know how to run on specific machines. So, we can run Web Assembly on many types of environments.

![web assembly IR - img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/02/04-01-langs09.png)
(image by Lin Clark of [code cartoons](https://code-cartoons.com/https://code-cartoons.com/))

### Web Assembly Outside of the Web - WASI

> WASI is a modular system interface for WebAssembly.
> --[wasi.dev](https://wasi.dev/)

WASI allows you to run Web Assembly outside of the web on all different OSs.

> ... it provides a fast, scalable, secure way to run the same code across all machines.
> -- [standardizing wasi](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)

### The Future

- Being that Web Assembly is more efficient, this could lead to lower battery consumption on mobile devices.
- Small devices like chromebooks have increased useability.
- Javascript libraries will be taking advantage of performance gains by implementing Web Assembly modules behind the scenes
- WASM has a future in serverless [cloudflare workers](https://blog.cloudflare.com/webassembly-on-cloudflare-workers/)
- WASM will have a presence on the IOT space
- [Web Assembly roadmap](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)

### Other Resources

[Awesome Wasm](https://github.com/mbasso/awesome-wasm) is a github repo with lots of links to Web Assembly resources and Projects.
[Lin Clark(Mozilla)](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/) does some excellent talks on web assembly.
