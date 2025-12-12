# Deployment Guide

이 프로젝트는 GitHub Actions를 사용하여 Cafe24 서버에 자동 배포됩니다.

## 필요한 GitHub Secrets 설정

GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 secrets을 추가해야 합니다:

### 1. SERVER_HOST
- **값**: `1.234.75.247`
- **설명**: Cafe24 서버 IP 주소

### 2. SERVER_USER
- **값**: 귀하의 SSH 사용자명 (예: `giljurha` 또는 서버 계정명)
- **설명**: SSH 접속 사용자명

### 3. SERVER_PASSWORD
- **값**: SSH 접속 패스워드
- **설명**: 서버 접속을 위한 패스워드

### 4. SERVER_PORT
- **값**: `22` (기본값) 또는 커스텀 SSH 포트
- **설명**: SSH 포트 번호

## 서버 사전 요구사항

Cafe24 서버에 다음이 설치되어 있어야 합니다:

```bash
# Docker 설치 확인
docker --version

# Docker가 없다면 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 현재 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER

# 변경사항 적용을 위해 로그아웃 후 재로그인
```

## 배포 프로세스

1. **코드 푸시**: `main` 브랜치에 코드를 푸시하면 자동으로 배포가 시작됩니다.
2. **Docker 이미지 빌드**: GitHub Actions가 Docker 이미지를 빌드합니다.
3. **이미지 푸시**: GitHub Container Registry (ghcr.io)에 이미지를 푸시합니다.
4. **서버 배포**: SSH로 서버에 접속하여 새 컨테이너를 실행합니다.

## 수동 배포

GitHub Actions 페이지에서 "Run workflow" 버튼을 클릭하여 수동으로 배포할 수 있습니다.

## 배포 확인

배포가 완료되면 다음 주소에서 애플리케이션을 확인할 수 있습니다:
- http://1.234.75.247

## 로그 확인

서버에서 컨테이너 로그를 확인하려면:

```bash
ssh your_username@1.234.75.247
docker logs tennis-app
```

## 컨테이너 관리

```bash
# 컨테이너 상태 확인
docker ps

# 컨테이너 중지
docker stop tennis-app

# 컨테이너 시작
docker start tennis-app

# 컨테이너 재시작
docker restart tennis-app

# 컨테이너 삭제
docker rm -f tennis-app
```

## 포트 변경

기본적으로 80 포트를 사용합니다. 다른 포트를 사용하려면 `.github/workflows/deploy.yml` 파일에서 `-p 80:80` 부분을 수정하세요.

예: `-p 8080:80` (호스트 8080 포트 → 컨테이너 80 포트)
