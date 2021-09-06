<!-- Please remove this file from your project -->
<template>
    <div class="flex flex-col min-h-screen bg-gray-100 justify-center">
        <div v-for="(commit, index) in commits" :key="index" class="flex p-1">
            <div class="flex flex-grow m-auto max-w-5xl bg-white rounded-lg shadow">
                <div class="flex-grow p-4 px-6">
                    <p class="font-semibold">{{ commit.message }}</p>
                    <p class="font-light">{{ commit.author }} committed {{ commit.time }} ago</p>
                </div>
                <div class="flex items-end p-4 font-light text-gray-500 text-sm">
                    {{ commit.hash }}
                </div>
                <div class="w-10 rounded-r-lg" :class="{
                    'bg-green-400': (commit.status == 'succeeded'),
                    'bg-yellow-400': (commit.status == 'running'),
                    'bg-red-400': (commit.status == 'failed'),
                    'bg-gray-400': true
                }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commits: [
                {
                    message: "📝 Create the backlog documentation",
                    author: "Akhilian",
                    time: "16 hours ",
                    status: "planned",
                    hash: "634d3b9f96a8b3d0f0504a52cb02599159304541"
                },
                {
                    message: "🐛 Fix rights on the git server so we can push",
                    author: "Akhilian",
                    time: "16 hours",
                    status: "running",
                    hash: "3b4c25fa216f9ed4f0d7559335639ecd89504f98"
                },
                {
                    message: "✨ Add docker-compose file and some documentation",
                    author: "Akhilian",
                    time: "16 hours",
                    status: "failed",
                    hash: "f95027a23dd9b22559cfcfc3cd8fd85372f43937"
                },
                {
                    message: "✨ Create a Docker image with SSH connexion and basic git server",
                    author: "Akhilian",
                    time: "17 hours",
                    status: "succeeded",
                    hash: "8ac2043e1d2a4fc25bf5967e3c3c8155d305a445"
                },
            ]
        }
    },

    async fetch() {
      const response = await fetch(
        '/api/commits'
      ).then(res => res.json())
      
      this.commits = response.commits
    },

    fetchOnServer: false
}
</script>
