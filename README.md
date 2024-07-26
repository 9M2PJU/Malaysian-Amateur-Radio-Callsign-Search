# Malaysian-Amateur-Radio-Callsign-Search

## Quick Setup

1. **Use Docker**
   ```bash
   docker run -d -p 7388:7388 bizkut/callsign-query
   ```

2. **The server will now be running and accessible at `http://localhost:7388`**

## Rebuild Docker Image

1. **You can rebuild the image if the premade is not suitable for your system archs or if you have modified the codes. Clone this repo.**
   ```bash
   git clone https://github.com/9M2PJU/Malaysian-Amateur-Radio-Callsign-Search.git callsign-query
   ```

2. **Navigate to Project Directory and build**
   ```bash
   cd callsign-query
   docker build -t callsign-query .
   ```

1. **Run the built image**
   ```bash
   docker run -d -p 7388:7388 callsign-query
   ```

## Setup Instructions

1. **Clone this repo and Navigate to Project Directory**
   ```bash
   git clone https://github.com/9M2PJU/Malaysian-Amateur-Radio-Callsign-Search.git callsign-query
   cd callsign-query
   ```

2. **Initialize a New Node.js Project**
   ```bash
   npm init -y
   ```

3. **Install Required Dependencies**
   ```bash
   npm install express node-fetch
   ```

4. **Create Project Files**
   - **Create `server.mjs`**: 
     ```bash
     touch server.mjs
     ```
   - **Update `package.json`**: Ensure it includes `"type": "module"`.
     ```bash
     nano package.json
     ```

5. **Set Up Frontend Files**
   - **Create `index.html`**: 
     ```bash
     mkdir public
     cd public
     touch index.html
     ```
   - **Create `styles.css`**:
     ```bash
     touch styles.css
     ```
   - **Create `script.js`**:
     ```bash
     touch script.js
     ```

6. **Start the Server**
   ```bash
   npm start
   ```

Your Node.js server will now be running and accessible at `http://localhost:7388`.

---



![image](https://github.com/user-attachments/assets/dc0bc51a-e0b0-4576-92a6-212e6b13cbce)



