<script lang="ts">
// import {  } from '$shared';
// import {  } from '$widgets';
// import {  } from '$entities'

let {
    categories
} = $props();
</script>

<section
    class="hero-about-section section-spacing"
    >

    <a name="about"></a>
    <div class="w-layout-blockcontainer container-full w-container">
        <div class="section-title inner-container text-center">
            <div class="sub-title-wrap center">
                <img
                    src="images/66d0464eec8062a3c7b9f083_icon-10.svg"
                    loading="lazy"
                    alt=""
                    class="sub-title-icon"
                    />
                <div>. O projekcie</div>
            </div>
            <h2>Ułóż zarządzanie, <br /> jak puzzle.</h2>
            <!-- <a href="/" class="button-link">more about us</a> -->
        </div>
        <div class="w-layout-grid grid-about">
            <div class="hero-about-content">
                <div class="section-title"><h3 class="heading-h4">Welcome to Puzzle Management</h3></div>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <div class="about-list">
                    {#each categories as {title, anchor}}
                    <a href='#{anchor}' class='no-underline'>
                        <div class="hero-about-counter-item"><span>{title}</span></div>
                    </a>
                    {/each}
                </div>
            </div>
            <div class="about-image-wrap">
                <img
                    src="images/66d0464eec8062a3c7b9f0ab_elemnet-5.svg"
                    loading="lazy"
                    alt=""
                    class="about-image-shape"
                    />
					<img
                    src="images/66d0464eec8062a3c7b9f0ac_elemnet-4.svg"
                    loading="lazy"
                    alt=""
                    class="about-image"
                    />
            </div>
            <div>
                <p class="margin-bottom-36">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <div class="w-layout-grid grid-counter">
                    <div>
                        <h2>6</h2>
                        <div>. Years of experience</div>
                    </div>
                    <div class="text-right">
                        <h2>16+</h2>
                        <div>. Lorem Ipsum has</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
</style>
