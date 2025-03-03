import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<dvhafly87-react-portfolio>/', // 저장소 이름을 넣어주세요. 예를 들어 '/my-react-app/'
});
