var fieldSample = fieldSample || {}; 

fieldSample.CustomizeFieldRendering = (function () {  

    var renderStatusField = function(ctx){
        var status = ctx.CurrentItem.Status;
        if( status === 'Pendente'){
            return '<div style="background-color: yellow">'+status+'</div>';
        } else if (status === 'Em andamento'){
            return '<div style="background-color: green">'+status+'</div>';
        }
    };

    var fieldJsLinkOverride = {};
    fieldJsLinkOverride.Templates = {};
    fieldJsLinkOverride.Templates.Fields = 
    { 
        'Status': 
        { 
            'View': renderStatusField
        } 
    }; 

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(fieldJsLinkOverride); 
})(); 

