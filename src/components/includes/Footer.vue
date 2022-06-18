<template>
    <footer class="fx">
        <div class="footer-wrapper gap-32 fx-col ai-c">
            <div class="fx-col ai-c gap-32 footer-cont-1">
                <h1>Get started with <span>Flexsale</span> Now.</h1>
                <span class="span">It will only take a moment.</span>
                <a href="" class="a-button button-primary">Create Free Account</a>
            </div>
            <ul class="social-list fx gap-8">
                <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 16.876 31.51">
                            <path d="M17.38,17.724l.875-5.7H12.783v-3.7c0-1.56.764-3.081,3.215-3.081h2.488V.385A30.336,30.336,0,0,0,14.07,0C9.564,0,6.618,2.731,6.618,7.676v4.346H1.609v5.7H6.618V31.51h6.165V17.724Z" transform="translate(-1.609)"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 31.518 31.51">
                            <path d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.386,9.386,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 38.797 31.51">
                            <path d="M34.809,11.234c.025.345.025.689.025,1.034,0,10.512-8,22.623-22.623,22.623A22.47,22.47,0,0,1,0,31.321a16.449,16.449,0,0,0,1.92.1,15.924,15.924,0,0,0,9.872-3.4,7.965,7.965,0,0,1-7.435-5.514,10.028,10.028,0,0,0,1.5.123,8.41,8.41,0,0,0,2.092-.271,7.952,7.952,0,0,1-6.376-7.8v-.1A8.008,8.008,0,0,0,5.17,15.468,7.963,7.963,0,0,1,2.708,4.833a22.6,22.6,0,0,0,16.4,8.321,8.976,8.976,0,0,1-.2-1.822,7.959,7.959,0,0,1,13.761-5.44,15.655,15.655,0,0,0,5.047-1.92,7.93,7.93,0,0,1-3.5,4.382A15.94,15.94,0,0,0,38.8,7.123a17.092,17.092,0,0,1-3.988,4.111Z" transform="translate(0 -3.381)"/>
                        </svg>
                    </a>
                </li>
            </ul>
            <ul class="footer-links">
                <li v-for="link in links" :key="link.id"><router-link :to="link.url">{{ link.name }}</router-link><i class="separator-dot"></i></li>
            </ul>
            <span class="copyright">© 2022 Flexsale. All Rights Reserved.</span>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data () {
        return {
            links: [
                { id: 1, url: '/contact-us', name: 'Contact us'},
                { id: 2, url: '/terms-and-conditions', name: 'Terms & Conditions'},
                { id: 3, url: '/cookies-policy', name: 'Cookies policy'},
                { id: 4, url: '/privacy-policy', name: 'Privacy policy'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
footer{
    padding: 100px 20px;
    .footer-wrapper {
        flex-grow: 1;
    }
    .footer-links{
        text-align: center;
        li {
            display: inline-block;
            a {
                transition: 0.2s all;
            }
            &:hover {
                color: $primary;
                text-decoration: underline;
            }
            &:last-child {
                i {
                    display: none;
                }
            }
        }
        .separator-dot{
            display: inline-block;
            margin: 4px 8px;
        }
    }
    .social-list{
        li {
            a {
                display: flex;
                height: 50px;
                width: 50px;
                justify-content: center;
                align-items: center;
            }
            path {
                transition: 0.3s all;
            }
            &:hover {
                path {
                    fill: $primary;
                }
            }
        }
    }
    .footer-cont-1{
        margin-bottom: 30px;
        h1 {
            font-size: 4.8rem;
            text-align: center;
            max-width: 600px;
            span {
                color: $primary;
            }
        }
        .span{
            font-size: 1.3rem;
        }
        .a-button {
            padding: 26px 36px;
            border-radius: 50px;
            font-size: 1.2rem;
        }
    }
    .copyright{
        color: $gray;
    }
}
</style>