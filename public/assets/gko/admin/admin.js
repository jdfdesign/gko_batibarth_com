var shiftHeld=!1,body,loader,dialog_max_width=964,comfirm_dialog;$(document).ready(function(){body=$("body"),body.on("ajax:beforeSend","a[data-remote], form[data-remote]",function(e,t,n){attachLoading("body")}).on("ajax:complete",function(e,t,n){removeLoading("body")}).on("click","a.remove_fields",function(){return $(this).prev("input[type=hidden]").val("1"),$(this).closest(".fields").hide(),!1}).on("change",".observe_field",function(){target=$(this).attr("data-update"),ajax_indicator=$(this).attr("data-ajax-indicator")||"#busy_indicator",$(target).hide(),$(ajax_indicator).show(),$.ajax({dataType:"html",url:$(this).attr("data-base-url")+encodeURIComponent($(this).val()),type:"get",success:function(e){$(target).html(e),$(ajax_indicator).hide(),$(target).show()}})}),add_fields=function(e,t,n){var r=(new Date).getTime(),i=new RegExp("new_"+t,"g");$(e).append(n.replace(i,r))},parent&&parent.document.location.href!=document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("ul.wym_tools a, li.wym_tools_class a:first").each(function(){$(this).attr("rel","tooltip").html("")}),$('a[rel="tooltip"], a[rel="tooltip nofollow"]').tooltip(),$('input[rel="popover"]').popover(),$(".btn.toggle").on("click",function(e){e.preventDefault(),$($(this).attr("href")).toggle()}),$("#bulk-actions-btn").on("click",function(e){e.preventDefault(),$("#bulk_action").val("destroy"),$("#bulk_form").submit()}),$("input.date, input.datetime").datepicker(),init_text_editor(),init_modal_dialogs(),init_nested_form_links(),$("textarea.wysihtml5").wysihtml5({stylesheets:"/assets/gko_wysihtml5_body.css"}),$(".change-upload-file-btn").bind("click",function(e){e.preventDefault();var t=$(this).find(".ui-btn-text:first");t.length||(t=$(this));var n=t.html(),r=$(this).attr("data-text");t.html(r),$(this).attr("data-text",n),$(this).parent().parent().find(".js-file-preview:first").toggle("fast").parent().find(".file-field:first").slideToggle("fast")}),$(".delete-file-btn").bind("click",function(e){e.preventDefault(),$(this).parent().parent().find(".js-file-preview:first").toggle("fast").parent().find(".file-field:first").slideToggle("fast").find("input.file").val("")}),$("ol#image_folders_nested_set li a").live("click",function(e){$("ol#image_folders_nested_set li").removeClass("ui-selected"),$(this).parent().addClass("ui-selected")})});var pages_modal={initialised:!1,init:function(){if(this.initialised)return;$("#page_selection_modal").on("click","a.selectable",function(e){var t=$(this).parent();t.parent().find("> .ui-selected").removeClass("ui-selected"),t.addClass("ui-selected"),e.preventDefault()}),$("#page_selection_modal").on("click","a#validate_page_selection_btn",function(e){var t=$("li.ui-selected:first"),n=t.data("type"),r=parseValue(t.attr("id")),i=t.find("a.selectable:first").html();$("#owner_name").html(i),$("#owner_id").val(r),$("#owner_type").val(n),$("#page_selection_modal").modal("hide")}),this.initialised=!0}},images_dialog={initialised:!1,init:function(){this.initialised||($("#image_dialog_size_container ul li a").on("click",function(e){$("#image_dialog_size_container ul li").removeClass("active"),$(this).parent().addClass("active"),e.preventDefault()}),$("body#dialog_container").on("click","ul.js-selectable a",function(e){e.preventDefault();var t=$(this),n=$("#image_assignments_form");if(n.length>0){var r=t.closest("li").attr("id"),i=parseValue(r);$("#image_assignment_image_id").val(i),n.live("ajax:beforeSend.rails",function(e,t){attachLoading("body#dialog_container")}).live("ajax:complete.rails",function(e,t){removeLoading("body#dialog_container")}).submit()}else{var s=t.find("img:first"),o=$("#image_dialog_size_container li.active a").attr("data-size");image_url=s.attr("data-"+o),parent&&((wym_src=parent.document.getElementById("wym_src"))!=null&&(wym_src.value=image_url),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=s.attr("title")),(wym_alt=parent.document.getElementById("wym_alt"))!=null&&(wym_alt.value=s.attr("alt")),(wym_dialog_submit=parent.document.getElementById("wym_dialog_submit"))!=null&&wym_dialog_submit.click())}}),this.initialised=!0)}},link_dialog={initialised:!1,init:function(){this.initialised||(this.init_close(),this.page_tab(),this.web_tab(),this.email_tab(),this.document_tab(),this.initialised=!0)},init_close:function(){parent&&parent.document.location.href!=document.location.href&&parent.document.getElementById("wym_dialog_submit")!=null&&$("#dialog_container input#insert_link_submit").click(function(e){e.preventDefault(),$(parent.document.getElementById("wym_dialog_submit")).click()})},page_tab:function(){$("#link_to_page").on("click","a.selectable",function(e){var t=$(this),n=t.parent(),r=n.parent();console.log(t.attr("href")),$("#link_to_page ul.selection").find(".ui-selected").removeClass("ui-selected"),n.addClass("ui-selected"),link_dialog.update_parent(t.attr("href"),t.html()),e.preventDefault()})},document_tab:function(){$("#link_to_document li a").click(function(e){e.preventDefault(),link_dialog.update_parent($(this).attr("href"))})},web_tab:function(){$("#web_address_text").change(function(e){link_dialog.update_parent($("#web_address_text").val(),null,"_blank")})},email_tab:function(){$("#email_address_text, #email_default_subject_text, #email_default_body_text").change(function(e){var t=$("#email_default_subject_text").val(),n=$("#email_default_body_text").val(),r="mailto:"+$("#email_address_text").val(),i="?";t.length>0&&(r+=i+"subject="+t,i="&"),n.length>0&&(r+=i+"body="+n,i="&"),link_dialog.update_parent(r,r.replace("mailto:",""))})},update_parent:function(e,t,n){parent!=null&&((wym_href=parent.document.getElementById("wym_href"))!=null&&(wym_href.value=e),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=t),(wym_target=parent.document.getElementById("wym_target"))!=null&&(wym_target.value=n||""))}};close_dialog=function(e){iframed()?(the_body=$(parent.document.body),the_dialog=parent.$(".ui-dialog-content")):(the_body=$(document.body).removeClass("hide-overflow"),the_dialog=$(".ui-dialog-content"),the_dialog.filter(":data(dialog)").dialog("close"),the_dialog.remove()),$(document.body).hasClass("wym_iframe_body")||(the_body.removeClass("hide-overflow"),the_dialog.filter(":data(dialog)").dialog("close"),the_dialog.remove(),e.preventDefault())},init_text_editor=function(){$("textarea.wymeditor").each(function(){textarea=$(this),(instance=WYMeditor.INSTANCES[$((textarea.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])!=null&&((next=textarea.parent().next())!=null&&next.length>0&&next.find("input, textarea").keydown($.proxy(function(e){shiftHeld=e.shiftKey,shiftHeld&&e.keyCode==$.ui.keyCode.TAB&&(this._iframe.contentWindow.focus(),e.preventDefault())},instance)).keyup(function(e){shiftHeld=!1}),(prev=textarea.parent().prev())!=null&&prev.length>0&&prev.find("input, textarea").keydown($.proxy(function(e){e.keyCode==$.ui.keyCode.TAB&&(this._iframe.contentWindow.focus(),e.preventDefault())},instance)))})},init_nested_form_links=function(){$("form a.add-nested-field").live("click",function(e){e.preventDefault();var t=$(this),n=$(t.attr("href")),r=timestamp,i=t.data("association"),s=t.data("template"),o=new RegExp("new_"+i,"g"),u=s.replace(o,r);$(u).appendTo(n).attr("id",r).addClass("dynamic");var a=$("#"+r);a.find("a.remove-nested-field, a.add-nested-field").each(function(e,t){$(t).attr("href","#"+r)}),a.find('input:[type="text"].date').each(function(e,t){$(t).datepicker()}),a.find("select, input, textarea").each(function(e,t){$(t).textinput()})}),$("form a.remove-nested-field").live("click",function(e){var t=$(this),n=$(t.attr("href"));n.length&&(t.hasClass("dynamic")?(n.fadeOut(500).remove(),t.siblings("input[type='hidden']").val("1"),t.siblings("form").trigger("nested:fieldRemoved")):(n.fadeOut(500),t.siblings("input[type='hidden']").val("1"),t.siblings("form").trigger("nested:fieldRemoved"))),e.preventDefault()})},init_modal_dialogs=function(){$('a[href*="dialog=true"]').not("#dialog_container a").each(function(e,t){$(t).data({"dialog-width":parseInt($($(t).attr("href").match("width=([0-9]*)")).last().get(0),10)||928,"dialog-height":parseInt($($(t).attr("href").match("height=([0-9]*)")).last().get(0),10)||473,"dialog-title":$(t).attr("title")||$(t).attr("name")||$(t).html()||null}).attr("href",$(t).attr("href").replace(/(\&(amp\;)?)?dialog\=true/,"").replace(/(\&(amp\;)?)?width\=\d+/,"").replace(/(\&(amp\;)?)?height\=\d+/,"").replace(/(\?&(amp\;)?)/,"?").replace(/\?$/,"")).on("click",function(e){e.preventDefault(),$anchor=$(this),iframe_src=(iframe_src=$anchor.attr("href"))+(iframe_src.indexOf("?")>-1?"&":"?")+"dialog=true",iframe=$("<iframe id='dialog_iframe' frameborder='0' marginheight='0' marginwidth='0' border='0' width='100%' height='100%' class='row-fluid'></iframe>");var n=getScreenSize(),r=Math.min(n.width,980),i=Math.min(n.height-100,980),s=$(t).data("dialog-type");s=="images"&&($anchor.data("dialog-width",n.width),r=n.width),iframe.dialog({title:$anchor.data("dialog-title"),zIndex:1050,modal:!0,resizable:!0,autoOpen:!0,width:n.width,height:i,open:onOpenDialog,close:onCloseDialog}),iframe.attr("src",iframe_src)})})},dnd_join_list=function(e,t,n){$.event.props.push("dataTransfer"),Modernizr.draganddrop&&($().dndPageScroll(),t.find("li").each(function(){$(this).attr("draggable","true")}),t.on({dragenter:function(e){e.stopPropagation(),e.preventDefault(),$(this).toggleClass("dragover")},dragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},dragleave:function(e){e.stopPropagation(),e.preventDefault(),$(this).toggleClass("dragover")},drop:function(e){e.stopPropagation(),e.preventDefault();var t=$(this),r=e.dataTransfer.getData("Text"),i=get_number_from_string(r),s=get_number_from_string(t.attr("id"));t.removeClass("dragover"),jQuery.ajax({type:"POST",url:n,data:{image_id:i,id:s},dataType:"script",beforeSend:function(e){attachLoading("body")},error:function(e,t,n){alert(n)},complete:function(e,t){removeLoading("body")}})}},"li"),e.on({dragstart:function(e){var t=$(this);t.css("opacity","0.5"),e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",t.attr("id"))},dragend:function(e){e.stopPropagation(),e.preventDefault(),$(this).css("opacity","1")}},"li"))},selectable_list=function(){$.fn.selectAllRows=function(e){var t,n,r;return t=$.extend({column:"first",selectTip:"Click to Select All",unselectTip:"Click to Un-Select All"},e||{}),isNaN(t.column)?(n=$("thead tr th:"+t.column+"-child input:checkbox",this),r=$("tbody tr td:"+t.column+"-child input:checkbox",this)):(n=$("thead tr th:nth-child("+t.column+") input:checkbox",this),r=$("tbody tr td:nth-child("+t.column+") input:checkbox",this)),n.attr("title",t.selectTip),n.click(function(){var e=this.checked;r.each(function(){this.checked=e}),e==1?$(this).attr("title",t.unselectTip):$(this).attr("title",t.selectTip)}),$(this)}},make_sortable=function(e){var t=e.data("sortable-url"),n=e.data("sortable-handle"),r=e.get(0).tagName=="UL"?"li":"tr";e.sortable().on("sortupdate",function(e,n){var i=$(n.item);$.ajax({type:"GET",url:t,items:r,data:{position:i.prevAll().length+1,id:parseValue(i.attr("id"))},beforeSend:function(e,t,n){attachLoading()},success:function(e,t,n,r){},complete:function(e,t,n){removeLoading()}})})},parseURL=function(e){var t={href:e},n=e.replace("//","/").split("/");return t.protocol=n[0],t.host=n[1],n[1]=n[1].split(":"),t.hostname=n[1][0],t.port=n[1].length>1?n[1][1]:"",n.splice(0,2),t.pathname="/"+n.join("/"),t.pathname=t.pathname.split("#"),t.hash=t.pathname.length>1?"#"+t.pathname[1]:"",t.pathname=t.pathname[0],t.pathname=t.pathname.split("?"),t.search=t.pathname.length>1?"?"+t.pathname[1]:"",t.pathname=t.pathname[0],t},iframed=function(){return parent&&parent.document.location.href!=document.location.href&&$.isFunction(parent.$)},attachLoading=function(e,t,n,r){typeof e=="undefined"&&(e="body"),container=$(e),typeof r=="undefined"&&(r=function(){}),typeof n=="undefined"&&(n=500),typeof t=="undefined"&&(t="Please wait..."),loader=$(e+" .gko-loader"),loader.length>0?loader.fadeIn(r):(container.append("<div class='gko-loader'><div class='progress progress-striped active'><div class='bar' style='width: 100%;'></div></div></div>"),loader=$(e+" .loader"),loader.css({"z-index":1e4,top:100}),loader.hide().fadeIn(n,r)),$("html").addClass("loading")},removeLoading=function(e,t,n){typeof e=="undefined"&&(e="body"),typeof t==undefined&&(t=500),typeof n=="undefined"&&(n=function(){$(this).remove()}),$(e+" .gko-loader").fadeOut(t,n),$("html").removeClass("loading")},parseValue=function(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=e.match(/\-?\d/g);return t&&t.constructor===Array?parseInt(t.join(""),10):0}return 0},timestamp=function(){return(new Date).getTime()},get_number_from_string=function(e){return e.replace(/[^\d]+/g,"")},getScreenSize=function(){var e=window.innerHeight>window.innerWidth?"landscape":"portrait",t=e==="portrait",n=t?480:320,r=t?320:480,i=t?screen.availHeight:screen.availWidth,s=t?screen.availWidth:screen.availHeight,o=Math.max(n,$(window).height()),u=Math.max(r,$(window).width()),a={width:Math.min(s,u),height:Math.min(i,o)};return a};