(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAC4kAAAuJATfJy60AAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDowMTowOCAxMDozOTo0MU43c6IAAANQSURBVGhD7ZlpyA1RAIY/+x6SiCShKBKFSCQSiRIJiS9l+SHKFlKWHyLFD5LyQ5QokigpSSgKRSiyliKyZN+35+3z1ula5i4zc+fLfeqp29yZs9yZOec951ZVqFDh/6QtXsXb2EcHMkIdXIavcaMORDEOf/zyGfbDLLAOw3ZF0gRPoS96gQOxXOhObEC35xvOw7xoiifQF7/CIZg2dXELuh1fcTYWRGM8hi7kDQ7HtFAntqPr/4IzsCga4WF0Ye9xFCaNOrETw05MxZJoiAfQhX7AsZgU9XEPur5POBFjQYXvRRf+GSdg3DTA/eh6PuJ4jJV6uAvDzkzGuNCdP4QuX4/xaEwEPbs70JXp2Z2OpaKB5Qi63Lc4EhNFndmKrlRD4iwsFg31x9HlaagfiqmgSWoTuvKCJqmA5ngSXc5LHIypos6sRzfiOy7EfGmBZ9DXP8f+WDZWY9iZpRhFKzyPvu4p9sWysxzVCTdsFf6NNngRfe5j7IWZYRGGnVFazUVLhCvocx5iD8wc8zHsjNYNepdEe7yG/u4BdsfMMgc1irnBSq+d8GZw7B52wcwzEzW/uOFKzv6slac6VmtQWtXM7w7IG9gBE0EzdRJcQs0NIXrRn9R8rB30xEcY3g2rdKuUm3l6o351N1xzxhTUOsbHlHKVdjOLZmftcLjB57AlihGoVOvvjqJWoJljAGrHxQ1VjlKeClGq1b6Uz1Hq1a5NZlBiVfx2A5VoFc//xCBUyg3PbYZlZxiGj4x+ZS2U/oVSbtTdSxWt4t6hG6RVXr7Pvd4npV5fq/dJqTh1xqA2B9yQg1josKrUq/TrMjT3KB2nhnY2tE3jBuxD7bQUg9KvUrDL0qSplJw4k1A7KK54N2qHpRS6odKwy7yOSsuJMQ3D/KTdwLgijtKwUrHLVi7riLFTjWE834Zea8SFUvEtdB13sDPGRu4aYzPG3QmjdKy74bruYyxrl9xVn/6rSKoTph3GuppcjC5MnVmLaaGR6zK6fo1sStUFswLDTqzEtGmNF9DtUKpWus6bNRh2YgmWC6XnovbAlJ18kV7wBVhulMNOo9t1FyPRrVP00HwxVwcyghKy/9c8qwP5oPG8a83HTKEYpHVPVLquUKHCb1RV/QSeKypUhZCweAAAAABJRU5ErkJggg=="},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),r=a.n(i),o=(a(15),a(6)),l=a(1),s=a(2),u=a(4),d=a(3),h=a(5),p=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).clickHandle=function(){a.props.onClick(a.props.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"tab-button "+this.props.status,href:this.props.link,onClick:this.clickHandle},this.props.value)}}]),t}(c.a.Component)),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).clickHandle=function(e){a.props.tabClick(e)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav-menu"},c.a.createElement(p,{value:"Home",status:"Home"===this.props.activeTab?"active":"",onClick:this.clickHandle}),c.a.createElement(p,{value:"Completed",status:"Completed"===this.props.activeTab?"active":"",onClick:this.clickHandle}),c.a.createElement(p,{value:"Remaining",status:"Remaining"===this.props.activeTab?"active":"",onClick:this.clickHandle}))}}]),t}(c.a.Component),m=(a(17),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).onChangeHandle=function(e){a.props.onChange(e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{className:"search-text",placeholder:"Search",onChange:this.onChangeHandle,value:this.props.searchText}))}}]),t}(c.a.Component)),b=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).keyDownCheck=function(e){13===e.keyCode&&e.target.value&&(a.props.onKeyDown(e.keyCode,e.target.value),e.target.value="")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"add-todo-box"},c.a.createElement("input",{className:"add-todo-text",placeholder:"Add a task",onKeyDown:this.keyDownCheck}))}}]),t}(c.a.Component)),k=(a(19),a(9)),A=a.n(k),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.taskString,a=e.checkStatus;return c.a.createElement("li",{className:"list-item"},c.a.createElement("input",{className:"check-box",type:"checkbox",onChange:this.props.onChange,checked:a}),c.a.createElement("p",null,t),c.a.createElement("button",{className:"delete-button",onClick:this.props.onDeleteClick},c.a.createElement("img",{src:A.a,alt:""})))}}]),t}(c.a.Component),C=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.value;return c.a.createElement("ul",{className:"todo-list"},t.map((function(t){return c.a.createElement(v,{key:t.id,taskString:t.title,onChange:function(){return e.props.onCheckBoxClick(t.id)},onDeleteClick:function(){return e.props.onDeleteClick(t.id)},checkStatus:t.checked})})))}}]),t}(c.a.Component)),O=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"empty-list"},c.a.createElement("p",null,"No tasks to show!"))}}]),t}(c.a.Component)),g=(a(22),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).taskInputCompleted=function(t,a){13===t&&e.setState({data:[].concat(Object(o.a)(e.state.data),[{id:e.state.indexUpdate,title:a,checked:!1}]),indexUpdate:e.state.indexUpdate+1})},e.searchInput=function(t){e.setState({searchInputString:t})},e.tabClickHandle=function(t){e.setState({clickedTabName:t,searchInputString:""})},e.idToIndexCalculation=function(t){var a=null;for(a=0;a<e.state.data.length&&e.state.data[a].id!==t;++a);return a},e.checkBoxHandle=function(t){var a=e.idToIndexCalculation(t),n=e.state.data.slice(0,a),c={id:e.state.data[a].id,title:e.state.data[a].title,checked:e.state.data[a].checked},i=e.state.data.slice(a+1);e.setState({data:[].concat(Object(o.a)(n),[{id:c.id,title:c.title,checked:!c.checked}],Object(o.a)(i))})},e.onDeleteClickHandle=function(t){var a=e.idToIndexCalculation(t),n=e.state.data.slice(0,a),c=e.state.data.slice(a+1);e.setState({data:[].concat(Object(o.a)(n),Object(o.a)(c))})},e.filterDataToRender=function(){return"Home"===e.state.clickedTabName?e.state.data.filter((function(t){return t.title.includes(e.state.searchInputString)})):"Completed"===e.state.clickedTabName?e.state.data.filter((function(e){return!0===e.checked})).filter((function(t){return t.title.includes(e.state.searchInputString)})):"Remaining"===e.state.clickedTabName?e.state.data.filter((function(e){return!1===e.checked})).filter((function(t){return t.title.includes(e.state.searchInputString)})):void 0},e.state={data:[],searchInputString:"",clickedTabName:"Home",indexUpdate:0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{tabClick:this.tabClickHandle,activeTab:this.state.clickedTabName}),c.a.createElement(m,{onChange:this.searchInput,searchText:this.state.searchInputString}),c.a.createElement(b,{onKeyDown:this.taskInputCompleted}),0!==this.filterDataToRender().length?c.a.createElement(C,{value:this.filterDataToRender(),onCheckBoxClick:this.checkBoxHandle,onDeleteClick:this.onDeleteClickHandle}):c.a.createElement(O,null))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7ef41261.chunk.js.map