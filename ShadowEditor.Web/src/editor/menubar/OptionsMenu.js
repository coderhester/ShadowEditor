import UI from '../../ui/UI';

/**
 * 选项菜单
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function OptionsMenu(options) {
    UI.Control.call(this, options);
    this.app = options.app;
}

OptionsMenu.prototype = Object.create(UI.Control.prototype);
OptionsMenu.prototype.constructor = OptionsMenu;

OptionsMenu.prototype.render = function () {
    var container = UI.create({
        xtype: 'div',
        parent: this.parent,
        cls: 'menu',
        children: [{
            xtype: 'div',
            cls: 'title',
            html: '选项'
        }, {
            xtype: 'div',
            cls: 'options',
            children: [{
                xtype: 'div',
                cls: 'option',
                html: '外观',
                onClick: this.onSurfaceOptions.bind(this)
            }, {
                xtype: 'div',
                cls: 'option',
                html: '场景',
                onClick: this.onSceneOptions.bind(this)
            }, {
                xtype: 'div',
                cls: 'option',
                html: '渲染器',
                onClick: this.onRendererOptions.bind(this)
            }]
        }]
    });

    container.render();
}

// ---------------------------------- 外观选项 ---------------------------------------

OptionsMenu.prototype.onSurfaceOptions = function () {

};

// ---------------------------------- 场景选项 ---------------------------------------

OptionsMenu.prototype.onSceneOptions = function () {

};

// ---------------------------------- 渲染器选项 -------------------------------------

OptionsMenu.prototype.onRendererOptions = function () {

};

export default OptionsMenu;