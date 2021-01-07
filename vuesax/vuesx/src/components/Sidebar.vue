
<template>
    <div class="sidebar">
      <vs-navbar text-white color="dark" shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
           <vs-navbar-item :active="active == 'home'" id="home">
          <router-link to="/">Accueil</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'discord'" id="discord">
         <router-link to="https://discord.mp-rp.fr">Discord</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'forum'" id="forum">
         <router-link to="https://forum.mp-rp.fr">Forum</router-link>
        </vs-navbar-item>
      </vs-navbar>
      <vs-sidebar
        background="dark"
        hoverExpand
        textWhite
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
          Panel utilisateur
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-planet'></i>
              </template>
              Mon Compte
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="RegisterAccount">
            <template #icon>
              <i class='bx bx-user-plus'></i>
            </template>
            <router-link to="/CrCompte">Formulaire d'inscription</router-link>
          </vs-sidebar-item>
          <vs-sidebar-item id="CharCreator">
            <template #icon>
              <i class='bx bx-user-plus'></i>
            </template>
            Creation Personnage
          </vs-sidebar-item>
          <vs-sidebar-item id="account">
            <template #icon>
              <i class='bx bx-group' ></i>
            </template>
            <router-link to="/CharactersList">Mes personnages</router-link>
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="Boutique">
          <template #icon>
            <i class='bx bx-shopping-bag'></i>
          </template>
          Boutique
        </vs-sidebar-item>
        <vs-sidebar-item id="example">
          <template #icon>
            <i class='bx bx-terminal' ></i>
          </template>
          Continuer ici exemple
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="../assets/discord.png" alt="">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
</template>
  

<script>

export default {
    data:() => ({
        name: 'Sidebar',   
        active: 'home',
        activeSidebar: false
        
    }) 
    
    
}
</script>

<style lang="less">


</style>