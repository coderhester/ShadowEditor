var ID = -1;

/**
 * 所有SVG控件基类
 * @author tengge / https://github.com/tengge1
 * @param {*} options 选项
 */
function SvgControl(options = {}) {
    this.parent = options.parent || document.body;
    this.id = options.id || this.constructor.name + ID--;
    this.scope = options.scope || 'global';

    this.data = options.data || null; // 自定义数据，例如：{ name: '小米', age: 20 }

    this.style = options.style || null;
    this.listeners = options.listeners || null;

    // 添加引用
    SVG.add(this.id, this, this.scope);
}

/**
 * 定义控件属性
 */
Object.defineProperties(SvgControl.prototype, {
    /**
     * 控件id（必须在options中设置，而且设置后无法改变）
     */
    id: {
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (this._id != null) {
                console.warn(`SvgControl: It is not allowed to assign new value to id.`);
            }
            this._id = id;
        }
    },

    /**
     * 控件id作用域（必须在options中设置，而且设置后无法改变）
     */
    scope: {
        get: function () {
            return this._scope;
        },
        set: function (scope) {
            if (this._scope != null) {
                console.warn(`SvgControl: It is not allowed to assign new value to scope.`);
            }
            this._scope = scope;
        }
    }
});

/**
 * 渲染SVG控件
 */
SvgControl.prototype.render = function () {

};

/**
 * 清除该控件内部所有内容。
 * 该控件仍然可以通过UI.get获取，可以通过render函数重写渲染该控件。
 */
SvgControl.prototype.clear = function () {
    // 移除所有子项引用
    (function remove(items) {
        if (items == null || items.length === 0) {
            return;
        }

        items.forEach((n) => {
            if (n.id) {
                SVG.remove(n.id, n.scope == null ? 'global' : n.scope);
            }
            remove(n.children);
        });
    })(this.children);

    this.children.length = 0;

    // 清空dom
    if (this.dom) {
        this.parent.removeChild(this.dom);
        this.dom = null;
    }

    // TODO: 未清除绑定在dom上的事件
};

/**
 * 彻底摧毁该控件，并删除在UI中的引用。
 */
SvgControl.prototype.destroy = function () {
    this.clear();
    if (this.id) {
        SVG.remove(this.id, this.scope == null ? 'global' : this.scope);
    }
};

export default SvgControl;