(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),s=a.n(i),r=a(2),l=a(3),c=a(5),d=a(4),u=a(1),h=a(6),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isHover:!1},a.handleOnMouseEnter=a.handleOnMouseEnter.bind(Object(u.a)(a)),a.handleOnMouseLeave=a.handleOnMouseLeave.bind(Object(u.a)(a)),a.handleOnClickButton=a.handleOnClickButton.bind(Object(u.a)(a)),a.handleOnClickLabel=a.handleOnClickLabel.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleOnMouseEnter",value:function(e){this.setState({isHover:!0})}},{key:"handleOnMouseLeave",value:function(e){this.setState({isHover:!1})}},{key:"handleOnClickButton",value:function(e){this.props.removeTodo(this.props.todo.id)}},{key:"handleOnClickLabel",value:function(e){this.props.toggleTodoComplete(this.props.todo.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"todoList-entry",onMouseEnter:this.handleOnMouseEnter,onMouseLeave:this.handleOnMouseLeave},o.a.createElement("div",{className:"todoList-label-complete",onClick:this.handleOnClickLabel}),o.a.createElement("p",{className:"complete-List-text"},this.props.todo.text),this.state.isHover?o.a.createElement("button",{className:"btn complete delete",onClick:this.handleOnClickButton},"\xd7"):"")}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isShowList:!1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{isShowList:!e.isShowList}}))}},{key:"setIsShowListFalse",value:function(){this.setState({isShowList:!1})}},{key:"componentWillUnmount",value:function(){this.setIsShowListFalse()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"completed-list",className:0!==this.props.completedTodoList.length?"active":""},this.props.completedTodoList.length>0?o.a.createElement("div",{className:"completed-list-info",onClick:this.handleClick},o.a.createElement("p",null,"\uc644\ub8cc\ud55c \uc77c\uacfc ".concat(this.props.completedTodoList.length,"\uac1c")),o.a.createElement("button",{className:"btn complete-list-open"},this.state.isShowList?"\ub2eb\uae30":"\ubcf4\uae30")):"",this.state.isShowList?this.props.completedTodoList.map((function(t){return o.a.createElement(p,{key:t.id,todo:t,completed:"completed",removeTodo:e.props.removeTodo,toggleTodoComplete:e.props.toggleTodoComplete})})):"")}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={text:""},a.inputRef=o.a.createRef(),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleEnterEvent=a.handleEnterEvent.bind(Object(u.a)(a)),a.handleBlurEvent=a.handleBlurEvent.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setDefaultText",value:function(e){this.setState({text:e})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"liftStates",value:function(){this.props.calledByCategory?this.props.updateCategoryName(this.props.category,this.state.text):this.props.updateTodoText(this.props.todo.id,this.state.text),this.props.changeEditableState()}},{key:"handleEnterEvent",value:function(e){"Enter"===e.key&&this.state.text&&this.liftStates()}},{key:"handleBlurEvent",value:function(){this.state.text&&this.liftStates()}},{key:"componentDidMount",value:function(){this.inputRef.current.focus(),this.setDefaultText(this.props.text)}},{key:"render",value:function(){return o.a.createElement("input",{ref:this.inputRef,type:"text",className:this.props.calledByCategory?"category-input":"todoList-input",value:this.state.text,onChange:this.handleChange,onKeyPress:this.handleEnterEvent,onBlur:this.handleBlurEvent})}}]),t}(o.a.Component),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={text:"",isHover:!1,isEditable:!1},a.handleOnMouseEnter=a.handleOnMouseEnter.bind(Object(u.a)(a)),a.handleOnMouseLeave=a.handleOnMouseLeave.bind(Object(u.a)(a)),a.handleOnClickButton=a.handleOnClickButton.bind(Object(u.a)(a)),a.handleOnClickLabel=a.handleOnClickLabel.bind(Object(u.a)(a)),a.handleOnClickText=a.handleOnClickText.bind(Object(u.a)(a)),a.changeEditableState=a.changeEditableState.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleOnMouseEnter",value:function(){this.setState({isHover:!0})}},{key:"handleOnMouseLeave",value:function(){this.setState({isHover:!1})}},{key:"handleOnClickButton",value:function(){this.props.removeTodo(this.props.todo.id)}},{key:"handleOnClickLabel",value:function(){this.props.toggleTodoComplete(this.props.todo.id)}},{key:"handleOnClickText",value:function(){this.setState({text:this.props.todo.text,isEditable:!0})}},{key:"changeEditableState",value:function(){this.setState({isEditable:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"todoList-entry",onMouseEnter:this.handleOnMouseEnter,onMouseLeave:this.handleOnMouseLeave},o.a.createElement("div",{className:"todoList-label-inComplete",onClick:this.handleOnClickLabel}),this.state.isEditable?o.a.createElement(g,{text:this.state.text,updateTodoText:this.props.updateTodoText,todo:this.props.todo,changeEditableState:this.changeEditableState}):o.a.createElement("p",{className:"todoList-text",onClick:this.handleOnClickText},this.props.todo.text),this.state.isHover?o.a.createElement("button",{className:"btn delete",onClick:this.handleOnClickButton},"\xd7"):"")}}]),t}(o.a.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={text:""},a.textInput=o.a.createRef(),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleEnterEvent=a.handleEnterEvent.bind(Object(u.a)(a)),a.handleBlurEvent=a.handleBlurEvent.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"updateTodoList",value:function(){this.props.updateTodoList(this.state.text),this.setState({text:""})}},{key:"handleEnterEvent",value:function(e){"Enter"===e.key&&this.state.text&&this.updateTodoList()}},{key:"handleBlurEvent",value:function(){this.state.text&&this.updateTodoList()}},{key:"render",value:function(){var e=this;return o.a.createElement("section",null,o.a.createElement("div",{id:"todo-list-nav"},o.a.createElement("h2",null,this.props.currentCategory.name),o.a.createElement("button",{className:"btn",onClick:function(){return e.textInput.current.focus()}},"\uc77c\uacfc \ucd94\uac00")),this.props.completedTodoList.length>0?o.a.createElement(v,{completedTodoList:this.props.completedTodoList,toggleTodoComplete:this.props.toggleTodoComplete,removeTodo:this.props.removeTodo}):"",this.props.currentCategoryTodoList.map((function(t){return o.a.createElement(m,{key:t.id,todo:t,removeTodo:e.props.removeTodo,toggleTodoComplete:e.props.toggleTodoComplete,updateTodoText:e.props.updateTodoText})})),o.a.createElement("div",{id:"todo-default-form"},o.a.createElement("input",{ref:this.textInput,type:"text",value:this.state.text,onChange:this.handleChange,onKeyPress:this.handleEnterEvent,onBlur:this.handleBlurEvent,placeholder:"\uc624\ub298\uc758 \uc77c\uacfc"})))}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={category:"",isEditable:!1,isHover:!1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleOnMouseEnter=a.handleOnMouseEnter.bind(Object(u.a)(a)),a.handleOnMouseLeave=a.handleOnMouseLeave.bind(Object(u.a)(a)),a.handleOnClickButton=a.handleOnClickButton.bind(Object(u.a)(a)),a.handleOnDoubleClickText=a.handleOnDoubleClickText.bind(Object(u.a)(a)),a.changeEditableState=a.changeEditableState.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.props.viewCurrentCategoryTodoList(this.props.category),this.props.setSearchingToFalse()}},{key:"handleOnMouseEnter",value:function(){this.setState({isHover:!0})}},{key:"handleOnMouseLeave",value:function(){this.setState({isHover:!1})}},{key:"handleOnClickButton",value:function(){this.props.removeCategory(this.props.category)}},{key:"handleOnDoubleClickText",value:function(){this.setState({text:this.props.category.name,isEditable:!0})}},{key:"changeEditableState",value:function(){this.setState({isEditable:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"category-entry",onMouseEnter:this.handleOnMouseEnter,onMouseLeave:this.handleOnMouseLeave},this.state.isEditable?o.a.createElement(g,{text:this.state.text,calledByCategory:"category",updateCategoryName:this.props.updateCategoryName,category:this.props.category,changeEditableState:this.changeEditableState}):o.a.createElement("p",{className:"category-text",onClick:this.handleClick,onDoubleClick:this.handleOnDoubleClickText},this.props.category.name),this.state.isHover&&"\ubbf8\ubd84\ub958"!==this.props.category.name?o.a.createElement("button",{className:"btn delete",onClick:this.handleOnClickButton},"\xd7"):"")}}]),t}(o.a.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).id=2,a.state={text:"",categories:[{id:0,name:"\ubbf8\ubd84\ub958"}]},a.textInput=o.a.createRef(),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.updateCategory=a.updateCategory.bind(Object(u.a)(a)),a.handleEnterEvent=a.handleEnterEvent.bind(Object(u.a)(a)),a.handleBlurEvent=a.handleBlurEvent.bind(Object(u.a)(a)),a.removeCategory=a.removeCategory.bind(Object(u.a)(a)),a.updateCategoryName=a.updateCategoryName.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"updateCategory",value:function(e){var t={id:this.id,name:e};this.setState({categories:this.state.categories.concat(t)}),this.props.viewCurrentCategoryTodoList(t),this.setState({text:""}),this.id=this.id+1}},{key:"handleEnterEvent",value:function(e){"Enter"===e.key&&this.state.text&&this.updateCategory(this.state.text)}},{key:"handleBlurEvent",value:function(e){this.state.text&&this.updateCategory(this.state.text)}},{key:"removeCategory",value:function(e){var t=this.state.categories.filter((function(t){return t.name!==e.name}));this.setState({categories:t}),this.props.removeCategory(e)}},{key:"updateCategoryName",value:function(e,t){e.name=t;var a=this.state.categories.filter((function(t){return t.id!==e.id})).concat(e);a.sort((function(e,t){return e.id-t.id})),this.setState({categories:a}),this.props.updateCategoryName(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"category-wrapper"},o.a.createElement("button",{className:"btn add-category",onClick:function(){return e.textInput.current.focus()}},"\uce74\ud14c\uace0\ub9ac \ucd94\uac00"),this.state.categories.map((function(t){return o.a.createElement(y,{key:t.id,category:t,viewCurrentCategoryTodoList:e.props.viewCurrentCategoryTodoList,removeCategory:e.removeCategory,updateCategoryName:e.updateCategoryName,setSearchingToFalse:e.props.setSearchingToFalse})})),o.a.createElement("div",{id:"category-default-form"},o.a.createElement("input",{ref:this.textInput,type:"text",id:"category-default-input",value:this.state.text,onChange:this.handleChange,onKeyPress:this.handleEnterEvent,onBlur:this.handleBlurEvent})))}}]),t}(o.a.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={text:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleEnterEvent=a.handleEnterEvent.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.props.searchTodo(e.target.value),this.setState({text:e.target.value})}},{key:"handleEnterEvent",value:function(e){"Enter"===e.key&&this.state.text&&this.props.searchTodo(e.target.value)}},{key:"render",value:function(){return o.a.createElement("input",{id:"search-input",type:"text",value:this.state.text,onChange:this.handleChange,onKeyPress:this.handleEnterEvent,placeholder:"\uac80\uc0c9"})}}]),t}(o.a.Component),O=function(e){return o.a.createElement("nav",null,o.a.createElement(f,{searchTodo:e.searchTodo}),o.a.createElement(b,{viewCurrentCategoryTodoList:e.viewCurrentCategoryTodoList,removeCategory:e.removeCategory,updateCategoryName:e.updateCategoryName,setSearchingToFalse:e.setSearchingToFalse}))},E=function(e){return o.a.createElement("div",{className:"search-result-wrapper",onClick:function(){e.viewCurrentCategoryTodoList(e.todo.category),e.setSearchingToFalse()}},o.a.createElement("div",{className:"search-result-category-name"},e.todo.category.name),o.a.createElement("div",{className:"todoList-entry"},o.a.createElement("div",{className:e.todo.isComplete?"search-label-complete":"search-label-inComplete"}),o.a.createElement("p",{className:"todoList-text"},e.todo.text)))},T=function(e){return o.a.createElement("section",null,o.a.createElement("div",{id:"todo-list-nav"},o.a.createElement("h2",null,e.currentCategory.name)),e.searchResult.map((function(t){return o.a.createElement(E,{key:t.id,todo:t,viewCurrentCategoryTodoList:e.viewCurrentCategoryTodoList,setSearchingToFalse:e.setSearchingToFalse})})))},k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).id=0,a.state={todoList:[],currentCategoryTodoList:[],currentCategory:{id:1,name:"\ubbf8\ubd84\ub958"},completedTodoList:[],searchResult:[],isSearching:!1},a.viewCurrentCategoryTodoList=a.viewCurrentCategoryTodoList.bind(Object(u.a)(a)),a.updateTodoList=a.updateTodoList.bind(Object(u.a)(a)),a.removeTodo=a.removeTodo.bind(Object(u.a)(a)),a.removeCategory=a.removeCategory.bind(Object(u.a)(a)),a.toggleTodoComplete=a.toggleTodoComplete.bind(Object(u.a)(a)),a.updateTodoText=a.updateTodoText.bind(Object(u.a)(a)),a.updateCategoryName=a.updateCategoryName.bind(Object(u.a)(a)),a.searchTodo=a.searchTodo.bind(Object(u.a)(a)),a.setSearchingToFalse=a.setSearchingToFalse.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"viewCurrentCategoryTodoList",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.todoList,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.setState({todoList:t,currentCategory:e,currentCategoryTodoList:t.filter((function(t){return t.category.name===e.name&&!1===t.isComplete})),completedTodoList:t.filter((function(t){return t.category.name===e.name&&!0===t.isComplete})),searchResult:a})}},{key:"updateTodoList",value:function(e){var t={id:this.id,text:e,category:this.state.currentCategory,isComplete:!1},a=this.state.todoList.concat(t);this.id=this.id+1,this.viewCurrentCategoryTodoList(this.state.currentCategory,a)}},{key:"removeTodo",value:function(e){var t=this.state.todoList.filter((function(t){return t.id!==e}));this.viewCurrentCategoryTodoList(this.state.currentCategory,t)}},{key:"removeCategory",value:function(e){var t=this.state.todoList.filter((function(t){return t.category.name!==e.name}));this.viewCurrentCategoryTodoList({id:0,name:"\ubbf8\ubd84\ub958"},t)}},{key:"toggleTodoComplete",value:function(e){var t=this.state.todoList.filter((function(t){return t.id===e}))[0];t.isComplete=!t.isComplete;var a=this.state.todoList.filter((function(t){return t.id!==e})).concat(t);a.sort((function(e,t){return e.id-t.id})),this.viewCurrentCategoryTodoList(this.state.currentCategory,a)}},{key:"updateTodoText",value:function(e,t){var a=this.state.todoList.filter((function(t){return t.id===e}))[0];a.text=t;var n=this.state.todoList.filter((function(t){return t.id!==e})).concat(a);n.sort((function(e,t){return e.id-t.id})),this.viewCurrentCategoryTodoList(this.state.currentCategory,n)}},{key:"updateCategoryName",value:function(e){var t=this.state.todoList.filter((function(t){return t.category.id===e.id}));t.forEach((function(t){return t.category.name=e.name}));var a=this.state.todoList.filter((function(t){return t.category.id!==e.id})).concat(t);a.sort((function(e,t){return e.id-t.id})),this.viewCurrentCategoryTodoList(e,a)}},{key:"searchTodo",value:function(e){if(e.length>0){this.setState({isSearching:!0});var t={id:0,name:"'".concat(e,"'\uc5d0 \ub300\ud55c \uac80\uc0c9\uacb0\uacfc")},a=new RegExp(e,"gi"),n=this.state.todoList.filter((function(e){return e.text.match(a)}));this.viewCurrentCategoryTodoList(t,void 0,n)}else this.setState({isSearching:!1}),this.viewCurrentCategoryTodoList({id:1,name:"\ubbf8\ubd84\ub958"})}},{key:"setSearchingToFalse",value:function(){this.setState({isSearching:!1})}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(O,{viewCurrentCategoryTodoList:this.viewCurrentCategoryTodoList,removeCategory:this.removeCategory,updateCategoryName:this.updateCategoryName,searchTodo:this.searchTodo,setSearchingToFalse:this.setSearchingToFalse}),this.state.isSearching?o.a.createElement(T,{currentCategory:this.state.currentCategory,searchResult:this.state.searchResult,viewCurrentCategoryTodoList:this.viewCurrentCategoryTodoList,setSearchingToFalse:this.setSearchingToFalse}):o.a.createElement(C,{currentCategory:this.state.currentCategory,updateTodoList:this.updateTodoList,currentCategoryTodoList:this.state.currentCategoryTodoList,removeTodo:this.removeTodo,removeCategory:this.removeCategory,completedTodoList:this.state.completedTodoList,toggleTodoComplete:this.toggleTodoComplete,updateTodoText:this.updateTodoText}))}}]),t}(o.a.Component);s.a.render(o.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.2114700d.chunk.js.map