(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(9),o=(t(0),t(174)),a={title:"Infer | Need help?",id:"support"},s=[{value:"Need help?",id:"need-help",children:[{value:"GitHub issues",id:"github-issues",children:[]},{value:"Updates",id:"updates",children:[]},{value:"IRC",id:"irc",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Infer cannot analyze my CocoaPods project",id:"infer-cannot-analyze-my-cocoapods-project",children:[]},{value:'"infer options -- <build command>" fails during a linking step',id:"infer-options----build-command-fails-during-a-linking-step",children:[]},{value:"I get a compilation error involving PCH files when running Infer",id:"i-get-a-compilation-error-involving-pch-files-when-running-infer",children:[]},{value:"Using Infer with Maven results in no output",id:"using-infer-with-maven-results-in-no-output",children:[]},{value:'Infer reports a "Too many open files" error',id:"infer-reports-a-too-many-open-files-error",children:[]},{value:"I get a lint error when running Infer with gradle",id:"i-get-a-lint-error-when-running-infer-with-gradle",children:[]},{value:'Running "infer options -- <build command>" fails with some other error',id:"running-infer-options----build-command-fails-with-some-other-error",children:[]},{value:'Running Infer fails with "ImportError: No module named xml.etree.ElementTree"',id:"running-infer-fails-with-importerror-no-module-named-xmletreeelementtree",children:[]},{value:"I get errors compiling Infer",id:"i-get-errors-compiling-infer",children:[]},{value:"My problem is not listed here",id:"my-problem-is-not-listed-here",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"How do I suppress Infer warnings on a class or method?",id:"how-do-i-suppress-infer-warnings-on-a-class-or-method",children:[]},{value:"Is Infer supported for Windows?",id:"is-infer-supported-for-windows",children:[]},{value:"How does Infer compare to the Clang Static Analyzer?",id:"how-does-infer-compare-to-the-clang-static-analyzer",children:[]},{value:"How does Infer compare to Android linters and Findbugs?",id:"how-does-infer-compare-to-android-linters-and-findbugs",children:[]},{value:"Why Infer doesn't find a particular bug?",id:"why-infer-doesnt-find-a-particular-bug",children:[]}]}],l={id:"support",title:"Infer | Need help?",description:"## Need help?",source:"@site/docs/support.md",permalink:"/docs/support"},c={rightToc:s,metadata:l},u="wrapper";function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"need-help"},"Need help?"),Object(o.b)("p",null,"Do not hesitate to ask questions using the following channels, or to submit pull\nrequest!"),Object(o.b)("h3",{id:"github-issues"},"GitHub issues"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/Infer/issues"}),"GitHub issues")," page is a good\nplace to ask questions, find answers, and report issues."),Object(o.b)("p",null,"Please include as many details as possible when submitting a GitHub issue. If\nyour are able to run Infer, please include the contents of\n",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/toplevel.log")," in your report. If not, please include at least your\noperating system and the version of Infer that you are using."),Object(o.b)("h3",{id:"updates"},"Updates"),Object(o.b)("p",null,"Keep up to date with the latest Infer news on our\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.facebook.com/inferstaticanalyzer/"}),"Facebook page")," and our\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/fbinfer"}),"Twitter account"),"."),Object(o.b)("h3",{id:"irc"},"IRC"),Object(o.b)("p",null,"Our IRC channel is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"irc://chat.freenode.net/infer"}),"#infer")," on Freenode.net."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h3",{id:"infer-cannot-analyze-my-cocoapods-project"},"Infer cannot analyze my CocoaPods project"),Object(o.b)("p",null,"In the presence of CocoaPods, you should use xcworkspace and not xcodeproj in\nthe compilation command that you supply to Infer. Here is an example you can\nadapt to your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- xcodebuild -workspace HelloWorld.xcworkspace -scheme HelloWorld\n")),Object(o.b)("h3",{id:"infer-options----build-command-fails-during-a-linking-step"},'"infer ',"[options]"," -- \\<build command",">",'" fails during a linking step'),Object(o.b)("p",null,"The linker will sometimes not work if files have been compiled using a different\ncompiler, such as the one Infer uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/infer-workflow"}),"under the hood"),"\nto analyze your files."),Object(o.b)("p",null,"A workaround consists in setting the ",Object(o.b)("inlineCode",{parentName:"p"},"LD")," environment variable to a dummy\nlinker, for instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"LD=/bin/true infer [options] -- <build command>\n")),Object(o.b)("h3",{id:"i-get-a-compilation-error-involving-pch-files-when-running-infer"},"I get a compilation error involving PCH files when running Infer"),Object(o.b)("p",null,"For instance,\n",Object(o.b)("inlineCode",{parentName:"p"},"error: PCH file uses an older PCH format that is no longer supported"),"."),Object(o.b)("p",null,"This is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/96"}),"known issue"),"."),Object(o.b)("p",null,"Please run Infer with the following environment variable setting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"GCC_PRECOMPILE_PREFIX_HEADER=NO\n")),Object(o.b)("h3",{id:"using-infer-with-maven-results-in-no-output"},"Using Infer with Maven results in no output"),Object(o.b)("p",null,"Try upgrading ",Object(o.b)("inlineCode",{parentName:"p"},"maven-compiler-plugin"),". See also\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/38"}),"this GitHub issue"),"."),Object(o.b)("h3",{id:"infer-reports-a-too-many-open-files-error"},'Infer reports a "Too many open files" error'),Object(o.b)("p",null,"The maximum number of files a program can simultaneously hold open is a bit low\non MacOs. You can increase the limit by running these commands for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sysctl -w kern.maxfiles=20480\nsysctl -w kern.maxfilesperproc=22480\nulimit -S -n 2048\n")),Object(o.b)("p",null,"Note that the settings will be reset at the next reboot."),Object(o.b)("p",null,"See also ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/22"}),"this GitHub issue"),"."),Object(o.b)("h3",{id:"i-get-a-lint-error-when-running-infer-with-gradle"},"I get a lint error when running Infer with gradle"),Object(o.b)("p",null,"You need to manually disable linters to run Infer. For instance"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- gradle build -x lint\n")),Object(o.b)("p",null,"See also ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/58"}),"this GitHub issue"),"."),Object(o.b)("h3",{id:"running-infer-options----build-command-fails-with-some-other-error"},'Running "infer ',"[options]"," -- \\<build command",">",'" fails with some other error'),Object(o.b)("p",null,"Please make sure that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\\<build command",">"," runs successfully on its own."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"infer")," is in your ",Object(o.b)("inlineCode",{parentName:"li"},"$PATH")," (try ",Object(o.b)("inlineCode",{parentName:"li"},"which infer"),", it should show where ",Object(o.b)("inlineCode",{parentName:"li"},"infer")," is\nlocated)")),Object(o.b)("h3",{id:"running-infer-fails-with-importerror-no-module-named-xmletreeelementtree"},'Running Infer fails with "ImportError: No module named xml.etree.ElementTree"'),Object(o.b)("p",null,"Make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"xml")," Python package is installed. For instance, on OpenSuse\n13.1, it is provided by the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://software.opensuse.org/download.html?project=XML&package=python-xmldiff"}),Object(o.b)("inlineCode",{parentName:"a"},"python-xmldiff")),"\npackage."),Object(o.b)("h3",{id:"i-get-errors-compiling-infer"},"I get errors compiling Infer"),Object(o.b)("p",null,"Make sure the dependencies are up to date. They may change as we update Infer\nitself; you may also need to recompile the facebook-clang-plugins when it\nchanges version. See the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/infer/blob/master/INSTALL.md"}),"installation document"),"\nfor an up-to-date list of dependencies and how to get them."),Object(o.b)("h3",{id:"my-problem-is-not-listed-here"},"My problem is not listed here"),Object(o.b)("p",null,"Do not hesitate to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"support#need-help?"}),"contact us"),"."),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("p",null,"Here are some frequently asked questions. More to come."),Object(o.b)("h3",{id:"how-do-i-suppress-infer-warnings-on-a-class-or-method"},"How do I suppress Infer warnings on a class or method?"),Object(o.b)("p",null,"In Java code, you can do this by annotating your class or method with\n",Object(o.b)("inlineCode",{parentName:"p"},'@SuppressLint("infer")'),". Or ",Object(o.b)("inlineCode",{parentName:"p"},'@SuppressWarnings("infer")')," if your Infer is older\nthan v0.10.0."),Object(o.b)("h3",{id:"is-infer-supported-for-windows"},"Is Infer supported for Windows?"),Object(o.b)("p",null,"Infer is not supported on Windows at the moment. You may try installing Infer on\na Linux virtual machine if your project can be compiled on Linux."),Object(o.b)("h3",{id:"how-does-infer-compare-to-the-clang-static-analyzer"},"How does Infer compare to the Clang Static Analyzer?"),Object(o.b)("p",null,"On iOS there is the Clang Static analyzer. Infer does some things different, in\nparticular reasoning that spans across multiple files. But CSA checks for more\nkinds of issues and is also more mature than Infer when it comes to iOS: we send\nbig respect to CSA! Infer has only got started there recently. Really, these\ntools complement one another and it would even make sense to use both. Indeed,\nthat's what we do inside Facebook."),Object(o.b)("h3",{id:"how-does-infer-compare-to-android-linters-and-findbugs"},"How does Infer compare to Android linters and Findbugs?"),Object(o.b)("p",null,"Infer finds deeper infer-procedural bugs sometimes spanning multiple files.\nLinters, in contrast, typically implement simple syntactic checks that are local\nwithin one procedure. But they are valuable and Infer doesn't try to duplicate\nwhat they are good at. At Facebook we run both Infer and a collection of Android\nlinters. Findbugs can be useful too; it is more akin to linters."),Object(o.b)("h3",{id:"why-infer-doesnt-find-a-particular-bug"},"Why Infer doesn't find a particular bug?"),Object(o.b)("p",null,"The answer here is for one of the checkers of Infer, the bi-abduction checker,\nthat finds Null Dereferences, Memory Leaks, Retain Cycles and other memory\nrelated issues."),Object(o.b)("p",null,"The analysis performs a symbolic execution of the code, keeping data structures\nthat represent a symbolic heap, and trying to prove memory safety of the\nprogram. When it fails to prove it, it can report an error, if it finds a Null\nDereference or Memory Leak, or it can find itself in an inconsistent state. In\nany case, it will stop the analysis of that particular procedure because the\nattempted proof doesn't make sense anymore. Another cause of the analysis not\nreaching some part of the code is that we introduce timeouts in the analysis,\nbecause otherwise it would take too long. So it could reach a timeout before\nreaching the end of the method. So when Infer doesn't find a particular bug,\nit's possible that it is because it couldn't reach that part of the code."))}p.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r),o=i.a.createContext({}),a=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=a(e.components);return i.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=a(t),p=r,d=u[s+"."+p]||u[p]||c[p]||o;return t?i.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):i.a.createElement(d,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);