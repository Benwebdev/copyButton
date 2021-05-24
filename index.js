const copyButton = document.getElementById('copyButton'); 

const addCopyEventListener = () => copyButton.addEventListener('click', copyButtonInit);

const copyButtonInit = (selector) => {
    const querySelector = document.querySelector(selector).innerHTML;
    const el = document.createElement('textarea');
    el.value = querySelector;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);  
}
