<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="utility-page-wrap page-wrapper">
	<div class="utility-page-content w-password-page w-form">
		<form
			id="email-form"
			name="email-form"
			data-name="Email Form"
			action="/.wf_auth"
			method="post"
			class="utility-page-form w-password-page"
			data-wf-page-id="66d0464eec8062a3c7b9f0c9"
			data-wf-element-id="6581404991e45d0bbab6080f00000000000c"
		>
			<h1 class="margin-bottom-32">Protected Page</h1>
			<label for="pass" class="w-password-page">Password</label>
			<input
				class="form-input w-password-page w-input"
				autofocus="true"
				maxlength="256"
				name="pass"
				data-name="field"
				placeholder="Enter your password"
				type="password"
				id="pass"
			/>
			<input
				type="submit"
				data-wait="Please wait..."
				class="button-primary-1 w-password-page w-button"
				value="Submit"
			/>
			<div class="error-message w-password-page w-form-fail">
				<div>Incorrect password. Please try again.</div>
			</div>
			<div style="display:none" class="w-password-page w-embed w-script">
				<input type="hidden" name="path" value="<%WF_FORM_VALUE_PATH%>" />
				<input type="hidden" name="page" value="<%WF_FORM_VALUE_PAGE%>" />
			</div>
			<div style="display:none" class="w-password-page w-embed w-script">
				<script type="application/javascript">
					(function _handlePasswordPageOnload() {
						if (/[?&]e=1(&|$)/.test(document.location.search)) {
							document.querySelector('.w-password-page.w-form-fail').style.display = 'block';
						}
					})();
				</script>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
</style>
