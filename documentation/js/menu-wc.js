'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">json-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlbumModule.html" data-type="entity-link" >AlbumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' : 'data-bs-target="#xs-components-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' :
                                            'id="xs-components-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' }>
                                            <li class="link">
                                                <a href="components/AlbumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlbumComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' : 'data-bs-target="#xs-injectables-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' :
                                        'id="xs-injectables-links-module-AlbumModule-161259b6b8c47d68d3f9a06b1f2b93eab00cc82b2dcef45d22171cd2d8d600f4f680bbc72d2a1ab3018ea64e4ce7629283af856a8aef5226187744cee8a37644"' }>
                                        <li class="link">
                                            <a href="injectables/AlbumService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlbumService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlbumRoutingModule.html" data-type="entity-link" >AlbumRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-e34c98a8a61744db859361f8dfb0799cac4f31159a798db68a2213d90f8ffd0fee829ab74f50708b23eb261973f3cb1b3d0d0211b6191989aebf0982e1c5b2d8"' : 'data-bs-target="#xs-components-links-module-AppModule-e34c98a8a61744db859361f8dfb0799cac4f31159a798db68a2213d90f8ffd0fee829ab74f50708b23eb261973f3cb1b3d0d0211b6191989aebf0982e1c5b2d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e34c98a8a61744db859361f8dfb0799cac4f31159a798db68a2213d90f8ffd0fee829ab74f50708b23eb261973f3cb1b3d0d0211b6191989aebf0982e1c5b2d8"' :
                                            'id="xs-components-links-module-AppModule-e34c98a8a61744db859361f8dfb0799cac4f31159a798db68a2213d90f8ffd0fee829ab74f50708b23eb261973f3cb1b3d0d0211b6191989aebf0982e1c5b2d8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommentsModule.html" data-type="entity-link" >CommentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' : 'data-bs-target="#xs-components-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' :
                                            'id="xs-components-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' }>
                                            <li class="link">
                                                <a href="components/CommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' : 'data-bs-target="#xs-injectables-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' :
                                        'id="xs-injectables-links-module-CommentsModule-54a26083b74c843b2054977de85080a95f52039326aae129037c92b76a8fcf1e852d733dd58a5fb5971ee5a3ebf5bf6389d773c038e4b1b2e50378b9e524a426"' }>
                                        <li class="link">
                                            <a href="injectables/CommentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentsRoutingModule.html" data-type="entity-link" >CommentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IndexModule.html" data-type="entity-link" >IndexModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-IndexModule-56ade44c0bec84ffb172f9324928ae9787991993bb8149d2c7547e62e3917c32d006cc9c64c231690ecff74ba9aaaa67894426024a46d4177a77028bbb253aab"' : 'data-bs-target="#xs-components-links-module-IndexModule-56ade44c0bec84ffb172f9324928ae9787991993bb8149d2c7547e62e3917c32d006cc9c64c231690ecff74ba9aaaa67894426024a46d4177a77028bbb253aab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndexModule-56ade44c0bec84ffb172f9324928ae9787991993bb8149d2c7547e62e3917c32d006cc9c64c231690ecff74ba9aaaa67894426024a46d4177a77028bbb253aab"' :
                                            'id="xs-components-links-module-IndexModule-56ade44c0bec84ffb172f9324928ae9787991993bb8149d2c7547e62e3917c32d006cc9c64c231690ecff74ba9aaaa67894426024a46d4177a77028bbb253aab"' }>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndexRoutingModule.html" data-type="entity-link" >IndexRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' : 'data-bs-target="#xs-components-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' :
                                            'id="xs-components-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' : 'data-bs-target="#xs-injectables-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' :
                                        'id="xs-injectables-links-module-PostModule-c156c4a2ec3b1247f6a14d16c0a380c435b9b9e14b428d34358e3c620555aa83798bdfe6cf8ff338d4a6bd308af9f00096e822a633c656d910e99474ac943708"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' : 'data-bs-target="#xs-components-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' :
                                            'id="xs-components-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' }>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' :
                                        'id="xs-injectables-links-module-ProductsModule-6db4010f98b7a9a070c1042eac81244d3f393c11f0ee6e6a7663b2cd9e6d293c25e8d592536b75d7ba6505822425a471b79d1d71a0a00a593427997be7ce817e"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodosModule.html" data-type="entity-link" >TodosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' : 'data-bs-target="#xs-components-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' :
                                            'id="xs-components-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' }>
                                            <li class="link">
                                                <a href="components/TodosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' : 'data-bs-target="#xs-injectables-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' :
                                        'id="xs-injectables-links-module-TodosModule-274029125f7ac540cd7066daea6ddaf9d12b2f97fab69521e57f21ec26fb11914fdf8f656ed6215a82c8811d10ffcddca06be868eb5913bec942f49d19d89e50"' }>
                                        <li class="link">
                                            <a href="injectables/TodosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodosRoutingModule.html" data-type="entity-link" >TodosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' : 'data-bs-target="#xs-components-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' :
                                            'id="xs-components-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' }>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' : 'data-bs-target="#xs-injectables-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' :
                                        'id="xs-injectables-links-module-UserModule-d7fc2d78d970bcd95d92f8a359b4bdacb6e92f1d1d36ca8b8e2547014dbf1b9a09f13600c249d32f4d7a08def1b81a2d01d528bbc3e89ba65df1f8284db40685"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Album.html" data-type="entity-link" >Album</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comments.html" data-type="entity-link" >Comments</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/Productos.html" data-type="entity-link" >Productos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todos.html" data-type="entity-link" >Todos</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlbumService.html" data-type="entity-link" >AlbumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsService.html" data-type="entity-link" >CommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodosService.html" data-type="entity-link" >TodosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AlbumInterface.html" data-type="entity-link" >AlbumInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommentsInterface.html" data-type="entity-link" >CommentsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostInterface.html" data-type="entity-link" >PostInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductosInterface.html" data-type="entity-link" >ProductosInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TodoInterface.html" data-type="entity-link" >TodoInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInterface.html" data-type="entity-link" >UserInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});