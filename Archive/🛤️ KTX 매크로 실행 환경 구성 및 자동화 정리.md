
# Python 설치

~~~bash
brew install python
~~~
>설치되면 기본적으로 `python3`, `pip3` 명령어가 사용 가능해짐

~~~bash
python3 --version pip3 --version
~~~
---

# 프로젝트 폴더 만들기

~~~bash
mkdir -p ~/Coding/srtgo cd ~/Coding/srtgo
~~~
> `srtgo.py` 파일 등을 여기에 둘 예정

# 📁 가상환경(vrtualenv) 설정

## 1. 가상환경 생성
~~~bash
cd ~/Coding/srtgo/srtgo
python3 -m venv venv
~~~
## 2. 가상환경 활성화
~~~bash
source venv/bin/activate
~~~
## 3. 필요한 라이브러리 설치
~~~bash
pip install requests click inquirer keyring termcolor python-telegram-bot pycryptodome
~~~
4. 프로그램 실행
~~~bash
python3 srtgo.py
~~~
# ⚙️ alias 설정 (명령어 단축 실행용)
## ▶ 임시 alias (현재 터미널에서만 유효)
~~~bash
alias srtgo='cd ~/Coding/srtgo/srtgo && source venv/bin/activate && python3 
srtgo.py'
~~~
##### ⚠️ 이건 현재 터미널 세션에서만 동작하고, 새로 열면 사라짐

## ▶ 영구 alias (매번 자동 등록)
~~~bash
echo "alias srtgo='cd ~/Coding/srtgo/srtgo && source venv/bin/activate && python3 srtgo.py'" >> ~/.zshrc
source ~/.zshrc
~~~
##### 터미널 어디서든 srtgo만 입력하면 자동 실행됨 ✅
