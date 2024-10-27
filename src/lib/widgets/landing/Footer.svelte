<script lang="ts">
	import { boardgamesList } from '$sharedData';

	import { BigContaciDivider } from '$sharedUi';
	import type { NavigationLink } from '$sharedTypes';

	interface NavigationProps {
		navigation: NavigationLink[];
	}

	let { navigation, categories } = $props();
</script>

<footer class="footer">
	<div class="w-layout-blockcontainer container-full w-container">
		<div class="footer-wrap">
			<a href="/" aria-current="page" class="footer-logo-link w-inline-block w--current">
				<img
					src="/images/logos/puzzle_management.svg"
					loading="lazy"
					alt="Logo"
					class="footer-logo h-64"
				/>
			</a>
			<div class="footer-block">
				<!-- <div class="form-block w-form">

<form

id="email-form"

name="email-form"

data-name="Email Form"

method="get"

class="subscribe-footer-form"

data-wf-page-id="66d0464eec8062a3c7b9f043"

data-wf-element-id="cd6ac138-cdfe-a877-e284-72d36a10e95c"

>

<input

class="form-input form-input-subscribe w-input"

maxlength="256"

name="Email"

data-name="Email"

placeholder="Enter email address"

type="email"

id="Email"

required=""

/>

<input

type="submit"

data-wait="Please wait..."

class="button-white button-subscribe w-button"

value="Submit"

/>

</form>

<div class="success-message w-form-done">

<div>Thank you! Your submission has been received!</div>

</div>

<div class="error-message w-form-fail">

<div>Oops! Something went wrong while submitting the form.</div>

</div>
                </div> -->
				<div class="footer-menu-big">
					{#each categories as { title, anchor }}
						<a
							href="#{anchor}"
							class="footer-menu-big-item w-inline-block group transition delay-150 duration-300 ease-in-out hover:-translate-y-8"
						>
							<div class="footer-menu-text-small">. pomoc przy</div>
							<h6>{title}</h6>
						</a>
					{/each}
					<!-- <a href="/service" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. What we do</div>
                        <h6>Services</h6>
                    </a>
                    <a href="/about" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. Who we are</div>
                        <h6>About</h6>
                    </a>
                    <a href="/blog" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. Insights &amp; Ideas</div>
                        <h6>Blog</h6>
                    </a> -->
				</div>
			</div>
			<div class="w-layout-grid grid-footer">
				<div class="footer-item">
					<div class="footer-title-wrap">
						<img src="/images/navigation-icon-1.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Nawigacja</h6>
					</div>
					<div class="footer-menu">
						<!-- : NavigationLink -->
						{#each navigation as { title, link }}
							<a href={link} aria-current="page" class="footer-link">{title}</a>
						{/each}
					</div>
				</div>
				<div class="footer-item">
					<div class="footer-title-wrap">
						<img src="/images/boardgames-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Lista gier</h6>
					</div>
					<div class="w-layout-grid grid-footer-menu">
						{#each boardgamesList as { title, progress, linkLanding, icon }}
							<a href={progress.landing ? linkLanding : '#'} target="_blank" class="footer-link">
								<img src={icon} class="h-8" alt={title} />
								{title}
							</a>
						{/each}
					</div>
				</div>
				<div class="footer-item">
					<div class="footer-title-wrap">
						<img src="/images/contact-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Kontact</h6>
					</div>
					<div class="footer-contact">
						<p class="no-margin">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
						</p>
						<a href="tel:+48000000000" class="text-white">+48 000 000 000</a>
						<a href="mailto:darkdev_brand@riseup.net" class="text-white">darkdev_brand@riseup.net</a
						>
					</div>
				</div>

				<div class="footer-item">
					<div class="footer-title-wrap">
						<img src="/images/social-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Social media</h6>
					</div>
					<div class="footer-social">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							class="footer-social-item w-inline-block"
						>
							<img
								src="images/facebook.svg"
								loading="lazy"
								alt=""
								class="footer-social-icon"
							/>
						</a>

						<!-- images/66d0464eec8062a3c7b9f08b_twitter.svg -->
						<!-- 66d0464eec8062a3c7b9f089_facebook.svg -->
						<!-- images/66d0464eec8062a3c7b9f08a_instagram.svg -->
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="footer-menu-inline">
					<a href="/" class="footer-link">Privacy Policy</a>
				</div>
				<div>
					Lorem Ipsum is simply <a href="/" target="_blank">Lorem Ipsum</a>, Lorem Ipsum is simply
					<a href="/" target="_blank">Lorem Ipsum</a>
				</div>
			</div>

			<BigContaciDivider />
		</div>
	</div>
</footer>

<!-- <div class="marquee-footer-medium-wrap">

<div class="marquee-big-items">

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

</div>

<div class="marquee-big-items">

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

</div>
</div> -->

<style lang="postcss">
</style>
