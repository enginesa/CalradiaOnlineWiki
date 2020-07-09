<template>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand"><img src="../../assets/images/logo.png" width="54"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link">Başlangıç</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Wiki</a>
                </li>

            </ul>

        </div>
    </nav>
</template>

<style scoped>
    .navbar{
        padding: 0 5px;
        box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
        background-color: #57141b !important;
    }
    .navbar .navbar-brand{
        margin-right: 0;
    }
</style>