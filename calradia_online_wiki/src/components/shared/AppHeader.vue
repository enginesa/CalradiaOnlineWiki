<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="bgRed mainNavbar" fixed="top">
            <router-link tag="b-navbar-brand" class="navbarLogo" :to="{ name: 'Home'}" exact>
                <img src="../../assets/images/logo.png" width="54">
            </router-link>


            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <router-link tag="b-nav-item" active-class="active" :to="{ name: 'Home'}" exact>
                        Başlangıç
                    </router-link>


                    <router-link tag="b-nav-item"  active-class="active" :to="{ name: 'Wiki'}">
                        Wiki
                    </router-link>



                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
    .mainNavbar{
        padding: 0 5px !important;
        box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
    }
    .mainNavbar .navbarLogo{
        margin-right: 0;
    }
</style>