function customRender(reactEl,mainContainer)
{
    // const domEl = document.createElement(reactEl.type);
    // domEl.innerHTML = reactEl.children;
    // domEl.setAttribute(`href`,reactEl.props.href);
    // domEl.setAttribute(`href`,reactEl.props.target);
    // root.appendChild(domEl);

    // optimized code DRY

    const domEl = document.createElement(reactEl.type);
    domEl.innerHTML = reactEl.children;
    const props = reactEl.props;
    for(const prop in props )
    {
        domEl.setAttribute(prop,reactEl.props[prop]);
    }

    mainContainer.appendChild(domEl);
}



const reactEl = 
{
    type : 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me!'
}

const root = document.getElementById('root');

customRender(reactEl,root)