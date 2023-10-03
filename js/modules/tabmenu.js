export default function TabmenuInit(){
    function ativarConteudoPorId(id) {
        const secao = document.getElementById(id);
        if (secao) {
            textos.forEach((item) => {
                item.classList.remove('active');
            });
            secao.classList.add('active');
        }
    }
    
    document.querySelectorAll('.menu-link a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('id').substring(1);
            ativarConteudoPorId(targetId);
        });
    });
}