<script>
    import { app } from "../js/test.js";

    const appName = app.name; // "[DEFAULT]" wenn erfolgreich
    const projectId = app.options.projectId;

    console.log("✅ Firebase App Name:", appName);
    console.log("✅ Firebase Project ID:", projectId);
    console.log("✅ Vollständige Config:", app.options);
</script>

<div class="mainContainer">
    <h2>🔥 Firebase Verbindungstest</h2>
    {#if appName}
        <p class="success">✅ Verbindung erfolgreich!</p>
        <ul>
            <li><strong>App Name:</strong> {appName}</li>
            <li><strong>Project ID:</strong> {projectId}</li>
        </ul>
    {:else}
        <p class="error">❌ Verbindung fehlgeschlagen!</p>
    {/if}
</div>

<style>
    .mainContainer {
        padding: 20px;
        font-family: sans-serif;
    }
    .success {
        color: green;
        font-size: 1.2em;
        font-weight: bold;
    }
    .error {
        color: red;
        font-size: 1.2em;
        font-weight: bold;
    }
    ul {
        margin-top: 10px;
    }
    li {
        margin: 5px 0;
    }
</style>
