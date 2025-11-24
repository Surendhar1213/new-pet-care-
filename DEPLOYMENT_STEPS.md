# Step-by-Step Guide: Deploy to Vercel

## ✅ What We've Done Already

1. ✅ Created `src/assets/img/` folder
2. ✅ Copied hero images to `src/assets/img/`:
   - hero2.jpg
   - hero3.jpg
   - hero4.jpg
3. ✅ Updated `Hero.jsx` to use Vite imports
4. ✅ Verified build works correctly

---

## 📋 Step-by-Step Instructions

### **Step 1: Test Locally (Optional but Recommended)**

1. Open terminal in your project folder
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open browser and go to: `http://localhost:5173`
4. Check if hero images are loading correctly
5. Press `Ctrl + C` to stop the server when done

---

### **Step 2: Build and Verify**

1. Run the build command:
   ```bash
   npm run build
   ```
2. Check the output - you should see:
   - ✅ `dist/assets/hero2-*.jpg`
   - ✅ `dist/assets/hero3-*.jpg`
   - ✅ `dist/assets/hero4-*.jpg`
3. If build is successful, proceed to next step

---

### **Step 3: Check Git Status**

1. Check what files have changed:
   ```bash
   git status
   ```
2. You should see:
   - `src/components/Hero.jsx` (modified)
   - `src/assets/img/hero2.jpg` (new file)
   - `src/assets/img/hero3.jpg` (new file)
   - `src/assets/img/hero4.jpg` (new file)

---

### **Step 4: Add Files to Git**

1. Add all changes:
   ```bash
   git add .
   ```
   OR add specific files:
   ```bash
   git add src/components/Hero.jsx
   git add src/assets/img/
   ```

---

### **Step 5: Commit Changes**

1. Create a commit with a descriptive message:
   ```bash
   git commit -m "Move hero images to src/assets for Vercel compatibility"
   ```

---

### **Step 6: Push to GitHub**

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```
   (Replace `main` with your branch name if different)

---

### **Step 7: Deploy to Vercel**

#### **Option A: If Vercel is Already Connected to Your Repo**

1. Go to [vercel.com](https://vercel.com)
2. Login to your account
3. Your project should auto-deploy when you push
4. Wait for deployment to complete (usually 1-2 minutes)
5. Check the deployment logs for any errors

#### **Option B: First Time Deploying to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"
6. Wait for deployment to complete

---

### **Step 8: Verify Deployment**

1. After deployment, Vercel will give you a URL (e.g., `your-project.vercel.app`)
2. Open the URL in your browser
3. Check if hero images are loading:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Refresh the page
   - Look for hero image files loading successfully
4. Check console for any errors (F12 → Console tab)

---

### **Step 9: Test All Features**

1. ✅ Hero slider should work
2. ✅ Images should change automatically
3. ✅ Navigation arrows should work
4. ✅ All 3 images should display correctly

---

## 🔧 Troubleshooting

### If Images Still Don't Load on Vercel:

1. **Check Build Logs**:
   - Go to Vercel dashboard
   - Click on your deployment
   - Check "Build Logs" tab
   - Look for any errors

2. **Verify Image Paths**:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Check if image requests are failing
   - Verify the image URLs are correct

3. **Clear Cache**:
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or clear browser cache

4. **Check Vercel Settings**:
   - Go to Project Settings → Build & Development Settings
   - Verify:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

---

## 📝 Summary

✅ Images are now in `src/assets/img/`  
✅ Hero.jsx uses proper Vite imports  
✅ Build is working correctly  
✅ Ready for Vercel deployment  

**Next Action**: Follow Steps 3-7 to commit, push, and deploy!

---

## 🎯 Quick Command Reference

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Check git status
git status

# Add all changes
git add .

# Commit
git commit -m "Move hero images to src/assets for Vercel compatibility"

# Push to GitHub
git push origin main
```

---

**Note**: After pushing to GitHub, Vercel will automatically deploy if it's connected to your repository. Otherwise, follow Option B in Step 7.

