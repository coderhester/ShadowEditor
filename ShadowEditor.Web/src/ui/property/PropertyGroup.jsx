import './css/PropertyGroup.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

/**
 * 属性组
 * @author tengge / https://github.com/tengge1
 */
class PropertyGroup extends React.Component {
    constructor(props) {
        super(props);

        this.handleExpand = this.handleExpand.bind(this, props.onExpand);
    }

    render() {
        const { className, style, children, title, show, expanded } = this.props;

        return <div className={classNames('PropertyGroup', !show && 'hidden')} style={style}>
            <div className={'head'} expanded={expanded ? 'true' : 'false'} onClick={this.handleExpand}>
                <div className={'icon'}>
                    <i className={expanded ? 'icon-expand' : 'icon-collapse'} />
                </div>
                <div className={'title'}>{title}</div>
            </div>
            <div className={classNames('content', !expanded && 'collapsed')}>
                {React.Children.map(children, (n, i) => {
                    if (n.props.show === false) {
                        return null;
                    }
                    return <div className={'property'} key={i}>
                        <div className={'label'}>{n.props.label}</div>
                        <div className={'field'}>{n}</div>
                    </div>;
                })}
            </div>
        </div>;
    }

    handleExpand(onExpand, event) {
        const expanded = event.target.getAttribute('expanded') === 'true';
        onExpand && onExpand(!expanded, event);
    }
}

PropertyGroup.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    title: PropTypes.string,
    show: PropTypes.bool,
    expanded: PropTypes.bool,
    onExpand: PropTypes.func,
};

PropertyGroup.defaultProps = {
    className: null,
    style: null,
    children: null,
    title: 'Group',
    show: true,
    expanded: true,
    onExpand: null,
};

export default PropertyGroup;