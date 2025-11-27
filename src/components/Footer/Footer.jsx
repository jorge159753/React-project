function Footer() {
    return (
        <div className="container">
            <div className="container-footer">
                <h3>Navegação</h3>
                <nav aria-label="Navegação secundária">
                    <ul>
                        <li><a href="/sobre">Sobre Nós</a></li>
                        <li><a href="/servicos">Serviços</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>

                <div class="footer-section">
                    <h3>Informações de Contato</h3>
                    <address>
                        <p>Endereço: Rua Exemplo, 123</p>
                        <p>Telefone: (00) 1234-5678</p>
                        <p>Email: <a href="mailto:contato@site.com">contato@site.com</a></p>
                    </address>
                </div>

                <div class="footer-section">
                    <h3>Siga-nos</h3>
                    <ul class="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span id="year">2024</span> Nome da Empresa. Todos os direitos reservados.</p>
                <p><a href="/politica-privacidade">Política de Privacidade</a> | <a href="/termos-uso">Termos de Uso</a></p>
            </div>
        </div>
    )
}

export default Footer;