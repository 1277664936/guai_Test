<template>
    <div class="row">
      <div class="card" v-for="inf in info " :key="inf.id">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img :src="inf.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{inf.login}}</p>
      </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			info:{}
		}
	},
	methods: {
		getreponse(value){
			console.log(value);
			this.info= value.data.items;
			// console.log(value);
			// console.log(value);
		}
	},
	mounted() {
		this.$bus.$on('getreponse',this.getreponse)
	},
}
</script>

<style scoped>
    .album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>