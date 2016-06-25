var listTemplate = listTemplate || {};

listTemplate.listName = 'Cadastro';

listTemplate.CustomizeViewRendering = (function() {
	/// Renderiza o corpo da view
	var renderViewCallback = function(ctx) {
		if (ctx.Templates.Body == '') {
			return RenderViewTemplate(ctx);
		}

		if (ctx.ListTitle == listTemplate.listName) {
			var listData = ctx.ListData;

			var htmlOutput = [];
			htmlOutput.push('<div class="view">');
			htmlOutput.push('<div class="row">');
			htmlOutput.push('<div class="col-md-12"><a href="' + ctx.listUrlDir + '"> Minha lista</a></div>');
			htmlOutput.push('<div class="col-md-12" id="custom-view-contents"></div>');
			htmlOutput.push('</div>');
			htmlOutput.push('</div>');

			var retVal = htmlOutput.join('');
			return retVal;
		} else {
			return RenderViewTemplate(ctx);
		}
	};

	/// Executar algo depois que o HTML gerado foi inserido no DOM
	var postRenderCallback = function(ctx) {
		if (ctx.ListTitle == listTemplate.listName) {

			$.each(ctx.ListData.Row, function(idx, elem) {
				$('#custom-view-contents').append('<div class="row"><div class="col-md-2"><label class="control-label">Título</label><input type="text" class="form-control" disabled="disabled" value="'+elem.Title+'"></input></div><div class="col-md-2"><label class="control-label">Cidade</label><input type="text" class="form-control" disabled="disabled" value="'+elem.Cidade+'"></input></div></div>');
			});
		}
	};

	var viewContext = {};
	viewContext.Templates = {};
	viewContext.Templates.View = renderViewCallback;
	viewContext.OnPostRender = postRenderCallback;
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(viewContext);
})();