@extends('backend.layouts.app')

@section('content')
<div class="aiz-titlebar text-left mt-2 mb-3">
    <div class="row align-items-center">
        <div class="col">
            <h1 class="h3">{{ translate('Website Top Banners') }}</h1>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h6 class="fw-600 mb-0">{{ translate('Top Banners') }}</h6>
    </div>
    <div class="card-body">
        <form action="{{ route('settings.update') }}" method="POST">
            @csrf
            <div class="form-group row gutters-10">
                <div class="col-lg-3">
                    <label class="from-label d-block">Marquee Text</label>
                </div>

                <div class="col-lg-9">
                    <div class="form-group">
                        <div class="col-lg-9">
                            <input type="hidden" name="types[]" value="top_banner_text">
                            <textarea name="top_banner_text" class="form-control">{{ get_setting('top_banner_text') }}</textarea>
                            <!-- <input type="text" placeholder="" name="login_page_banner_link" value="{{ get_setting('login_page_banner_link') }}" class="form-control"> -->
                        </div>
                    </div>
                </div>

            </div>
            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ translate('Update') }}</button>
            </div>
        </form>
    </div>
</div>
@endsection