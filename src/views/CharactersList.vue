<template>
 <body>
<Sidebar />
<div class="container">
  <div class="square Male">
<vs-card type="3">
    <template #title>
      <h3> Prenom_Nom </h3>
    </template>
    <template #img>
      <img src="../assets/characterMale.png" alt="">
    </template>
      <template #text>
      <p>
        Argent:
      </p>
      <p>             
        Level:
      </p>
      <p>
        vehicules:
      </p>
    </template>
  </vs-card>
  </div>
  <div class="square Female">
  <vs-card type="3">
    <template #title>
      <h3>Prenom_Nom</h3>
    </template>
    <template #img>
      <img src="../assets/characterFemale.png" alt="">
    </template>
    <template #text>
      <p>
        Argent:
      </p>
      <p>             
        Level:
      </p>
      <p>
        vehicules:
      </p>
    </template>
  </vs-card>
  </div>
</div>
</body>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'CharactersList',
  
  components: {
    Sidebar
  }
}
</script>


<style lang="less">
.container {
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.square {
    width: 50%;
    margin: 0 300px;
}

</style>